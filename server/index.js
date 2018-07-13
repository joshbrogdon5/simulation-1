const bodyParser = require('body-parser');
const express = require('express');
const controller = require('./../Server/controller');
const massive = require('massive');
require('dotenv').config();



const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3005;

app.get('/api/inventory', controller.getAll)
app.post('/api/product', controller.create)
app.delete('/api/product/:id', controller.delete);

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})



