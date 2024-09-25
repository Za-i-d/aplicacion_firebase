const express = require("express");
const routes = require("./routes/rutas");

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log("Servidor en http://localhost:" + port);
});