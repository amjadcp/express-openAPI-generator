const { schemaGen } = require("../util/schemaGen")

module.exports.endpointInfo=(arrayObj)=>{
    let endpoints = {}
    arrayObj.forEach(obj=>{
        let methods = Object.keys(obj)
        methods.splice(methods.indexOf('url'), 1) // push the key "url"

        endpoints[obj.url] = {}
        methods.forEach(method=>{

            endpoints[obj.url][method] = {
                tags : obj[method].tag ? [obj[method].tag] : ["default"],
                description: obj[method].description ? obj[method].description : "",
                summary: obj[method].summary ? obj[method].summary : "",
            }

            endpoints[obj.url][method]['parameters'] = []

            if(obj[method].body){
                let body = Object.keys(obj[method].body)
                body.forEach(name=>{
                    endpoints[obj.url][method]['parameters'].push({
                        name: name,
                        in: 'body',
                        description: obj[method].body[name].description,
                        required: obj[method].body[name].required
                    })
                })
            }

            if(obj[method].path){
                let path = Object.keys(obj[method].path)
                path.forEach(name=>{
                    endpoints[obj.url][method]['parameters'].push({
                        name: name,
                        in: 'path',
                        description: obj[method].path[name].description,
                        required: obj[method].path[name].required
                    })
                })
            }

            if(obj[method].query){
                let query = Object.keys(obj[method].query)
                query.forEach(name=>{
                    endpoints[obj.url][method]['parameters'].push({
                        name: name,
                        in: 'query',
                        description: obj[method].query[name].description,
                        required: obj[method].query[name].required
                    })
                })
            }

            if(obj[method].responses){
                let status = Object.keys(obj[method].responses)
                endpoints[obj.url][method]['responses'] = {}
                status.forEach(code=>{
                    if(obj[method].responses[code]){
                        endpoints[obj.url][method]['responses'][code] = {
                            description: obj[method].responses[code].description ? obj[method].responses[code].description : "",
                            content: {
                                "application/json":{
                                    schema: {
                                        type: "object",
                                        example: obj[method].responses[code].response ? obj[method].responses[code].response : {}
                                    }
                                }
                            }
                        }
                    }
                })
            }
            
        })

    })
    return endpoints
}
