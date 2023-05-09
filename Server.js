const express = require('express')
const app = express()
const PORT = 9877
const bodyParser = require("body-parser")

const Routes = require('./Routes/Routes')
const AdminRoutes = require('./Routes/AdminRoutes')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use('/' , Routes)
app.use('/admin' , AdminRoutes)




app.listen(PORT , ()=>{
    console.log(`Server is Running on PORT : ${PORT}`)
})







