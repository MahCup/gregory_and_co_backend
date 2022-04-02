const express = require("express");
const router = express.Router();
const { item } = require('../models')
const ItemService = require('../services/item')

const itemService = new ItemService(item);

router.get("/", async(req, res) => {
    try {
        const itens = await itemService.get();
        res.json(itens);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os itens.')
    }
});

// tratamento de requisições e respostas
router.post("/", async(req, res) => {
    try {
        const valor = req.query.valor,
        tipo_de_embalagem = req.query.tipo_de_embalagem,
        pedido_id = req.query.pedido_id,
        produto_id = req.query.produto_id;

        await itemService.add({valor, tipo_de_embalagem, pedido_id, produto_id});
        res.status(201).send('Item adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o item.')
    }
});

router.delete("/", async(req, res) => {
    try {
        const item = req.query;
        console.log(req.query)
        await itemService.del(item);
        res.status(200).send('Item excluído com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir o item.')
    }
});

module.exports = router