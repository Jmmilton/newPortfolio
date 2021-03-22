const express = require('express');
require("dotenv").config();
const app = express();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

let pass = process.env.PASSWORD;
const PORT = process.env.PORT || 5000;



const CLIENT_ID = process.env.CLIENTID;
const CLIENT_SECRET = process.env.SECRET;
const REDIRECT_URI = process.env.REDIRECTURI;
const REFRESH_TOKEN = process.env.REFTOKEN;

const oauth2Client = new OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
);

oauth2Client.setCredentials({
    refresh_token: REFRESH_TOKEN
});

const accessToken = oauth2Client.getAccessToken()

//Middleware

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res)=> {
    res.sendFile(__dirname + '/public/index.html')
})

app.post('/', (req, res) => {
    // console.log(req.body)

    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: 'jay13milton@gmail.com',
    //         pass: pass,
    //     }
    // })

    const smtpTransport = nodemailer.createTransport({
        service: "gmail",
        auth: {
             type: "OAuth2",
             user: "jay13milton@gmail.com", 
             clientId: CLIENT_ID,
             clientSecret: CLIENT_SECRET,
             refreshToken: REFRESH_TOKEN,
             accessToken: process.env.ACCESSTOKEN
        }
   });
//    console.log(REFRESH_TOKEN)

    const mailOptions = {
        from: req.body.email,
        to: 'jay13milton@gmail.com',
        subject: `Message received from Portfolio`,
        text: req.body.message
    }

    // transporter.sendMail(mailOptions, (error, info)=>{
    //     if(error){
    //         console.log(error)
    //         res.send('error')
    //     } else {
    //         console.log('Email sent: ' + info.response, req.body.message)
    //         res.send('success')
    //     }
    // })

    smtpTransport.sendMail(mailOptions, (error, response) => {
        error ? console.log(error) : res.send('success');
        smtpTransport.close();
   });
})
 
app.listen(PORT, () =>{
    console.log(`server running on port ${PORT}`)
})