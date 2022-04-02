const express = require("express");
const router = express.Router();
const { order } = require('../models')
const OrderService = require('../services/order')

const orderService = new OrderService(order);

router.get("/", async(req, res) => {
    try {
        const orders = await orderService.get();
        res.json(orders);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os pedidos.')
    }
});

// tratamento de requisições e respostas
router.post("/", async(req, res) => {
    try {
        const data = req.query.data,
        destinatario = req.query.destinatario,
        valor_total = req.query.valor_total,
        cpf = req.query.cpf,
        endereco_id = req.query.endereco_id;


        await orderService.add({data, destinatario, valor_total, cpf, endereco_id});
        res.status(201).send('Pedido adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o pedido.')
    }
});

router.delete("/", async(req, res) => {
    try {
        const order = req.query;
        console.log(req.query)
        await orderService.del(order);
        res.status(200).send('Pedido excluído com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir o pedido.')
    }
});

module.exports = router