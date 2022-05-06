
class APIfeatures {
    constructor(data, reqQuery) {
        this.data = data,
            this.reqQuery = reqQuery
    }
    sortFun() {
        if (this.reqQuery.sort) {
            this.data = this.data.sort(this.reqQuery.sort.split(',').join(' '))
        }
        return this
    }
    filterFun() {
        if (this.reqQuery.fields) {
            this.data = this.data.select(this.reqQuery.fields.split(',').join(' '))
        }
    }

    // paginate() {
    //         const page = Number(this.reqQuery.page) || 1
    //         const limit = this.reqQuery.limit*1 || 2
    //         const skip = (page - 1) * limit        // 1 -0 2-2 3-4
    //         this.data = this.data.skip(skip).limit(limit)
    //         return this
        
    // }

}

module.exports = APIfeatures