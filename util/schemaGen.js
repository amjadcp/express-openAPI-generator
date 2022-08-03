const {typeEnum} = require('./typeEnum')

module.exports.schemaGen=(expressSchema)=>{

    const keys = Object.keys(expressSchema.paths)
    let schema = {}
    keys.forEach(key=>{
        let type = expressSchema.paths[key].options.type.toString().split(' ')
        if(type.length>1){
            type = type[1]
            if(type.includes(typeEnum.String)) type = typeEnum.String
            else if(type.includes(typeEnum.Number)) type = typeEnum.Number
            else if(type.includes(typeEnum.Date)) type = typeEnum.Date
            else if(type.includes(typeEnum.Boolean)) type = typeEnum.Boolean
            else if(type.includes(typeEnum.ObjectId)) type = typeEnum.ObjectId
            schema[key] = type
        }
    })
    return schema
}