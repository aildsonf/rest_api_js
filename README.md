# <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png" height="25" weight="25"> REST API using JavaScript

This Project uses JavaScript + Node.JS and MongoDB

### Tools used in this Project:

- [Express Framework](https://expressjs.com/en/guide/routing.html)
- [Mongoose ODM](https://mongoosejs.com/docs/guide.html)
- [MongoDB Compass](https://docs.mongodb.com/compass/current/)
- [Insomnia](https://support.insomnia.rest/category/19-using-insomnia)

### Instructions

1. You can either use `node server.js` or `npm run dev` script to start the API;
2. The base URL is `http://localhost:5000/api/patients/`;
3. For [HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods):

   - 3.1. **GET** api/patients/
   - 3.2. **GET** api/patients/:id
   - 3.3. **POST** api/patients/
   - 3.4. **PUT** api/patients/:id
   - 3.5. **DELETE** api/patients/:id

- _In order to use `npm run dev`, install `npm install -D nodemon` as devDependencies_
- _GET, POST, PUT methods return data in json format_

- *Replace ':id' with _id string attribute*
```
   {
      "_id": "0a000000000b00000cde00fg",
      ..
   }
```

