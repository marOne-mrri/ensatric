const nodeMailer = require("nodemailer");

module.exports = email => {
    console.log("sending");
    const smtp = nodeMailer.createTransport({
        host: 'smtp-pulse.com',
        port:  587,
        secure: process.env.NODE_ENV !== "development",
        auth: {
            user: 'ourdou.marouane17@gmail.com',
            pass: 'NJ2PXEeG2SqoFGd',
        },
    });
    smtp.sendMail(email);
    console.log("sent !");
};