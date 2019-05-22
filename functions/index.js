const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express')
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express()

try {
    admin.initializeApp(functions.config().firebase)
} 
catch(e) {
    console.log('Cloud functions initializeApp failure')
}

app.use(cors({ origin: true }))

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
        user: functions.config().credential.email,
        pass: functions.config().credential.password     
       }
   }); 

app.post(`/confirmation-email/:reservId/:email`, (req, res) => {
    console.log(req.params.reservId, req.params.email)
    console.log(req.body)
    let mailOptions = {
        from: functions.config().credential.email,
        to: req.params.email,
        subject: 'Trip confirmation',
        html: 
        `<h3>Hi ${req.body.name},</h3>
        <p>Your trip from <strong>${req.body.departure_from}</strong> to <strong>${req.body.destination}</strong> is Confirmed.</p>
        <p>Departure Date: <strong>${req.body.departure_date.seconds}</strong></p>
        <p>Departure time: <strong>${req.body.departure_time}</strong></p>
        <p>Your driver name is <strong>${req.body.driverName}</strong></p>
        <p>You can call or text him at: <strong>${req.body.driver_phoneNumber}</strong></p>`
    };


    transporter.sendMail(mailOptions)
        .then(() => {
            admin.firestore().collection('reservations')
                .doc(req.params.reservId)
                .update({isConfirmed: true})
                .then(() => console.log('Reservation updated'))
                .catch((err) => console.log(err.toString()))
            res.status(200).send('Notification sent')
        })
        .catch(err => res.send(err.toString()))
})
   
exports.app = functions.https.onRequest(app)

        
