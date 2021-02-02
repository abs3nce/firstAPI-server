//importy
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const bodyParser = require('body-parser');
//zapnutie expressu a schopnost pouzitia cez app
const app = express();

//server na enviromental porte alebo porte 3000 sleduje requesty
port = process.env.port || 3000;
app.listen(port);

//pripojenie ku databaze
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("Pripojene ku databaze...");
    }
);
app.use(bodyParser.json());
/*-----------------------------------------------------------------------------------------------------------------------------*/

//import routes
const postsRoute = require("./routes/route_posts"); //logika sa nachadza v ./routes/route_posts.js

//middleware na presmerovanie na router
app.use('/api/posts', postsRoute); //vzdy ked sa accessne .../api/posts tak pouzi postsRoute