const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()
const port = 3030

db_url = process.env.DB_URL.replace('<PASSWORD>', process.env.DB_PASSWORD)
// Connect DB
mongoose.connect(db_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('DB Connected')).catch(err => {
    console.log(err)
})

app.listen(process.env.PORT || port, () => {
    console.log(`localhost:${port}`)
})