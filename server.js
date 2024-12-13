const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuração do Nodemailer
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "seuemail@gmail.com", // Substitua pelo seu email
        pass: "suasenha",           // Substitua pela sua senha
    },
});

// Rota para envio de email
app.post("/send-email", (req, res) => {
    const { nome, email, mensagem } = req.body;

    const mailOptions = {
        from: email,
        to: "tiagogoncalvescesar", // Substitua pelo email de destino
        subject: `Mensagem de ${nome}`,
        text: mensagem,
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao enviar email.");
        }
        res.status(200).send("Email enviado com sucesso!");
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
