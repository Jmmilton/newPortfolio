const express = require('express');
const path = require('path');
require("dotenv").config();
const app = express();
// const bodyParser = require('body-parser')
const nodemailer = require("nodemailer");

let pass = process.env.PASSWORD;
const PORT = process.env.PORT || 5000;


//Middleware

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) => {
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jay13milton@gmail.com',
            pass: pass,
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'jay13milton@gmail.com',
        // subject: `Message from ${req.body.email}: ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
            res.send('error')
        } else {
            console.log('Email sent: ' + info.response, req.body.message)
            res.send('success')
        }
    })
})
 
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})