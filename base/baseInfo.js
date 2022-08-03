module.exports.baseInfo=({...obj})=>{
    if(obj.servers && obj.servers.constructor!==Array) throw 'Servers must be array'
    else{
        let servers = []
        if(obj.servers && obj.servers!==0) obj.servers.forEach(server=>servers.push({url: server}))
        return {
            openapi: "3.0.3", // present supported openapi version
            info: {
            title: obj.title ? obj.title : "Untitled", // short title.
            description: obj.description ? obj.description : "Untitled", //  desc.
            version: obj.version ? obj.version : "1.0.0", // version number
            contact: {
                name: obj.author ? obj.author : "unknown", // your name
                email: obj.email ? obj.email : "example@email.com", // your email
                url: obj.url ? obj.url : "example.com", // your website
                },
            },
            servers: servers
        }
    }
}

// [
//     {
//         url: "http://localhost:8000", // url
//         description: "Local server", // name
//     },
// ]