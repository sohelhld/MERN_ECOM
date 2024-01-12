const nodeMailer = require ('nodemailer')
require("dotenv").config()

const sendEmail = async(options)=>{
    const transporter = nodeMailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        service:process.env.SMPT_SERVICE,
        auth:{
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        }
    })

    const mailoptions = {
        from:process.env.SMPT_MAIL,
        to:options.email,
        subject:options.subject,
        text:options.message
    }

    await transporter.sendMail(mailoptions);
};

module.exports = sendEmail;