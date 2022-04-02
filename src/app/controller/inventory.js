const express = require("express");
const router = express.Router();
const { inventory } = require('../models')
const InventoryService = require('../services/inventory')

const inventoryService = new InventoryService(inventory);

router.get("/", async (req, res) => {
    try {
        const inventories = await inventoryService.get();
        res.json(inventories);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os estoques.')
    }
});

router.post("/", async (req, res) => {
    try {
        const quantidade = req.query.quantidade,
        produto_id = req.query.produto_id;

        await inventoryService.add({ quantidade, produto_id });
        res.status(201).send('Estoque adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o estoque.')
    }
});

router.delete("/", async (req, res) => {
    try {
        const estoque = req.query;
        console.log(req.query)
        await inventoryService.del(estoque);
        res.status(200).send('Estoque excluído com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir o estoque.')
    }
});

module.exports = router