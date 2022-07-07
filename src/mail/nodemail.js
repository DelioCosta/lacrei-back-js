const nodemailer = require("nodemailer");

const Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "deliocqcosta@gmail.com",
        pass: "qojtqrkymbhpcyov"
    }
});

module.exports={
    enviar: (destinatario, conselho_ativo) => {

        if(conselho_ativo){
            Transporter.sendMail({
                from: "Delio Costa <deliocqcosta@gmail.com>",
                to: destinatario,
                subject: "Teste envio de email conselho_ativo true",
                text: "Vai achando que não vai ter email nessa bagaça!",
                html: "<a href = https://www.linkedin.com/in/delio-costa/>Magica!</a>",
            }).then(message => {
                console.log(message);
            }).catch(err => {
                console.log(err);
            })
        } else {
            Transporter.sendMail({
                from: "Delio Costa <deliocqcosta@gmail.com>",
                to: destinatario,
                subject: "Teste envio de email conselho_ativo false",
                text: "Não foi dessa vez parsa!",
            }).then(message => {
                console.log(message);
            }).catch(err => {
                console.log(err);
            })
        } 
    }
}
