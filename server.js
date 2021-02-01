const express = require('express');
const app = express();
const nodemailer = require("nodemailer");

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
            pass: '',
        }
    })
})

app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})