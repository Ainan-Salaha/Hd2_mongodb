const express = require("express");
const bodyParser=require('body-parser');
const empRouter= require('./routes/employee')

const app= express();

app.use(bodyParser.json());
app.use(empRouter)

app.listen(4000,()=>{
    console.log("Server started @ port 4000")
})