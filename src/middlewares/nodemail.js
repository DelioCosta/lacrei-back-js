const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "deliocqcosta@gmail.com",
        pass: "qojtqrkymbhpcyov"
    }
});

transporter.sendMail({
    from: "Delio Costa <deliocqcosta@gmail.com>",
    to: "vas.anavictoria@gmail.com",
    subject: "Teste envio de email",
    text: "Vai achando que não vai ter email nessa bagaça!",
    html: "<a href = https://www.linkedin.com/in/delio-costa/>Magica!</a>",
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})
