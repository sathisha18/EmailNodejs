const nodemailer = require('nodemailer');
const path = require('path');

// Create a transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'sathishbs8496@gmail.com', // your email address
        pass: 'llzqaqrfuarfegfo' // your email password
    }
});

// Setup email data
let mailOptions = {
    from: '"Sathish" <sathishbs8496@gmail.com>', // sender address
    to: 'recipient@example.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b><br><img src="cid:unique@nodemailer.com"/>', // html body with inline image
    attachments: [
        {
            filename: 'image.png', // The image file name
            path: path.join(__dirname, 'image.png'), // Correct path to the image file
            cid: 'unique@nodemailer.com' // Same CID value as in the html img src
        },
        {
            filename: 'document.pdf', // The document file name
            path: path.join(__dirname, 'document.pdf'), // Correct path to the document file
        }
    ]
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
