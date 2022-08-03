const { baseInfo } = require("./base/baseInfo")
const { endpointInfo } = require("./base/endpointInfo")
const { schemaGen } = require("./util/schemaGen")

class AutoDoc{
    init({ title, description, version, author, email, url, servers }){
        this.baseInfo = baseInfo({ title, description, version, author, email, url, servers })
    }
    endPoints(arrayObj){
        this.endpointInfo = endpointInfo(arrayObj)
    }
    schema(obj){
        return schemaGen(obj)
    }
    render(){
        return{
            ...this.baseInfo,
            paths: this.endpointInfo
        }
    }
}


module.exports = {AutoDoc}