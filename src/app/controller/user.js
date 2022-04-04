const express = require("express");
const router = express.Router();
const { user } = require('../models')
const UserService = require('../services/user')

const userService = new UserService(user);

router.get("/", async (req, res) => {
    try {
        const users = await userService.get();
        res.json(users);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os usuários.')
    }
});

// tratamento de requisições e respostas
router.post("/", async (req, res) => {
    try {
        const cpf = req.body.cpf,
            nome_completo = req.body.nome_completo,
            genero = req.body.genero,
            email = req.body.email,
            senha = req.body.senha,
            telefone = req.body.telefone,
            celular = req.body.celular;
            
        await userService.add({ cpf, nome_completo, genero, email, senha, telefone, celular });
        res.status(201).send('Usuário adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o usuário.')
    }
});

module.exports = router