const express = require("express");
const routers = require('./app/controller');
const { sequelize } = require('./app/models');

const app = express();


// tratar requisições que vem com formato json
app.use(express.json());

// avoid problem wirh CORS policy
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

app.use('/', routers);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

sequelize.sync().then(() => {
    console.log("Conectado com o BD.")
})