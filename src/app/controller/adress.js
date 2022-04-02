const express = require("express");
const router = express.Router();
const { adress } = require('../models')
const AdressService = require('../services/adress')

const adressService = new AdressService(adress);

router.get("/", async(req, res) => {
    try {
        const products = await adressService.get();
        res.json(products);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os endereços.')
    }
});

// tratamento de requisições e respostas
router.post("/", async(req, res) => {
    try {
        const identificador = req.query.identificador,
        cep = req.query.cep,
        logradouro = req.query.logradouro,
        numero = req.query.numero,
        complemento = req.query.complemento,
        cidade = req.query.cidade,
        estado = req.query.estado,
        cpf = req.query.cpf;

        await adressService.add({identificador, cep, logradouro, numero, complemento, cidade, estado, cpf});
        res.status(201).send('Endereço adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o endereço.')
    }
});

router.delete("/", async(req, res) => {
    try {
        const adress = req.query;
        console.log(req.query)
        await adressService.del(adress);
        res.status(200).send('Endereço excluído com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir o endereço.')
    }
});

module.exports = router