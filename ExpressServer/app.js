
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT ||3000;
const passport = require('passport');
const passportConfig = require("./config/server/passportConfig")
const config = require('config');
const apiPrefix = config.get('apiPrefix');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())
//routes

app.use(apiPrefix + "/users",require("./routes/usersRoutes"))
app.use(apiPrefix + "/safety",require("./routes/safetyRoutes"))

// add router in the Express app.

app.use("/",router)

// pass passport for configuration
passport.use(passportConfig.createStrategy())
app.use(passport.initialize())

// Configurar cabeceras y cors
app.use(cors())
// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });


app.listen(port,()=>{
console.log(`Server listen at http:localhost:${port}`);
})

