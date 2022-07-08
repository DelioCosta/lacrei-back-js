const nodemailer = require("nodemailer");

const textoNaoAceito = `
    Boas vindas profissional da saúde, tudo bem?

Algo deu errado no pré-cadastro e não conseguimos validar o seu número de incrição no Conselho Profissional. Mas não se preocupe, você pode entrar em contato com o órgão responsável para regularizar a situação e poder fazer parte do nosso time o quanto antes!

Já regularizou e gostaria de tentar cadastrar novamente? Clique no botão abaixo para tentar mais ma vez!

CADASTRAR - BOTÃO

Ficamos muito felizes pelo seu empenho em fazer parte da nossa equipe!

A Equipe Lacrei acredita que, ao transformar a realidade de um indivíduo ou de um grupo, transformamos o mundo. Pensando nisso, oferecemos a melhor experiência no atendimento de algumas necessidades básicas das pessoas LGBTQIAP+, como atendimento em saúde, apoio jurídico e suporte na busca de emprego. Acreditamos que esse é um importante alicerce na construção de mudanças e equiparação de direitos.

Se houver qualquer dúvida em relação ao seu cadastro, por favor entre em contato conosco utilizando os botões no cabeçalho ou rodapé deste e-mail! 



Muito obrigade!


Atenciosamente,



Equipe Lacrei`;


const textoAceito= `
Boas vindas profissional da saúde, tudo bem?

Você realizou o pré-cadastro no noso site e, após uma breve análise do seu número de inscrição no Conselho Profissional, estamos felizes em poder dizer que você esta ativo, OBA!!

Mas, para fazer parte do nosso time por completo, vamos precisar que você conclua o cadastro no portal Lacrei. Basta clicar no botão abaixo e inserir seu endereço de e-mail e sua senha realizados no pré-cadastro. Vamos lá?!

CONCLUIR CADASTRO - BOTÃO

Estamos muito felizes em ter você conosco!

A Equipe Lacrei acredita que, ao transformar a realidade de um indivíduo ou de um grupo, transformamos o mundo. Pensando nisso, oferecemos a melhor experiência no atendimento de algumas necessidades básicas das pessoas LGBTQIAP+, como atendimento em saúde, apoio jurídico e suporte na busca de emprego. Acreditamos que esse é um importante alicerce na construção de mudanças e equiparação de direitos.

Se houver qualquer dúvida em relação ao seu cadastro, por favor entre em contato conosco utilizando os botões no cabeçalho ou rodapé deste e-mail! 



Muito obrigade!


Atenciosamente,



Equipe Lacrei`;



const Transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "deliocqcosta@gmail.com",
        pass: ""
    }
});

module.exports={
    enviar: (destinatario, conselho_ativo) => {

        if(conselho_ativo){
            Transporter.sendMail({
                from: "Delio Costa <deliocqcosta@gmail.com>",
                to: destinatario,
                subject: "Teste envio de email conselho_ativo true",
                text: textoAceito,
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
                text: textoNaoAceito,
            }).then(message => {
                console.log(message);
            }).catch(err => {
                console.log(err);
            })
        } 
    }
}
