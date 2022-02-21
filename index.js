const mongoose = require("mongoose")
const express = require("express")
const roleController = require("./controller/role-controller")


const app = express()
    //middle ware
app.use(express.json()) // mobile -> accept json data from request and set data into body
app.use(express.urlencoded({ extended: true })) //web -->accept url encoded data from request and set data into body



//database
mongoose.connect('mongodb://localhost:27017/ecom', function(err) {
    if (err) {
        console.log("db connection is fai.. . .. .");
        console.log('err');
    } else {
        console.log("db connected....");
    }
})

//roles
app.post("/roles", roleController.addRole)

//server
app.listen(2000, function() {
    console.log("server started on 2000")
})