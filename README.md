# express-openAPI-generator

# express-api-auto-doc


<!-- ABOUT THE PROJECT -->

### ABOUT THE PROJECT
---

It is a tiny package to generate API documentation in swagger using JS file with the help of "swagger-ui-express"


## Document

1. Install
```sh
npm i express-openAPI-generator swagger-ui-express
```


2. Create /api-doc as mentioned in swagger-ui-express package
```sh
const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const {document} = require('./swagger.js')
const swaggerDocument = require(document);

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));
```
3. Create swagger.js file
```sh
const { AutoDoc } = require('express-openapi3.0-generator')

const doc = new AutoDoc()

doc.init({ 
    title: "test",  
    servers: ["http://127.0.0.1:8000"] 
})

doc.endPoints([
    {   
        url: "/login",
        get: {
            tag: "tag",
            description: "somthing",
            summary: "summary",
            body: {
                phoneNumber: {
                    description: "body",
                    required: true,
                }
            },
            path: {
                id: {
                    description: "id",
                    required: true
                }
            },
            query: {
                test: {
                    description: "test",
                    required: false
                }
            },
            responses: {
                200: {
                    description: "OK",
                    response: {
                        sucess: true,
                        message: "yesss",
                        data: doc.schema(AdminSchema) // express schema to openAPI schema
                    }
                }
            }
        },
    }
])


module.exports.document = doc.render()
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/amjadcp/express-openAPI-generator/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTRIBUTERS -->
## Contributers
* [Amjad CP](https://github.com/amjadcp)