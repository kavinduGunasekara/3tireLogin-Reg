const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel= require('./models/Employee')

const app = express()
app.use (express.json())
app.use(cors())

mongoose.connect ("mongodb+srv://kavindu:0711549169@cluster0.lgjhpqg.mongodb.net/your-database-name?retryWrites=true&w=majority");

app.post("/login",(req, res)=>{
    const{email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else {
                res.json("the pssword is incorrect")
            }
        }else{
            res.json("No rcord existed")
        }
    })
})

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(Employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})