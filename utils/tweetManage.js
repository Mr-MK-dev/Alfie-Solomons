class APIfeatures {
    constructor(userposts, reqQuery) {
        this.userposts = userposts,
        this.reqQuery = reqQuery
    }
    sortFun(){
        if(this.reqQuery.sort){
            this.userposts = this.userposts.sort(this.reqQuery.sort.split(',').join(' '))
        }
        return this 
    }

}