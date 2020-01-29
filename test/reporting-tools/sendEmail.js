var nodemailer = require("nodemailer");
var defaults = require('./environment')


var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use SSL
    auth: {
        user: defaults.authEmail,
        pass: defaults.authPassword
    }
});
var mailOptions = {
    from: defaults.sender,
    to: defaults.receiver,
    subject: defaults.mailSubject,
    text: defaults.mailText
    
};
transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        reject(error);
    }
    fulfill(info);
});