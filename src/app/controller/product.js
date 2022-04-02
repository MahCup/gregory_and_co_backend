const express = require("express");
const router = express.Router();
const { product } = require('../models')
const ProductService = require('../services/product')

const productService = new ProductService(product);

router.get("/", async(req, res) => {
    try {
        const products = await productService.get();
        res.json(products);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os produtos.')
    }
});

// tratamento de requisições e respostas
router.post("/", async(req, res) => {
    try {
        const nome = req.query.nome,
        preco = req.query.preco,
        numeracao = req.query.numeracao,
        cor = req.query.cor,
        palmilha_anti_odor= req.query.palmilha_anti_odor,
        material = req.query.material,
        publico = req.query.publico,
        tipo_de_fechamento = req.query.tipo_de_fechamento,
        amortecedor = req.query.amortecedor,
        marca_id = req.query.marca_id;

        await productService.add({nome, preco, numeracao, cor, palmilha_anti_odor, material, publico, tipo_de_fechamento, amortecedor, marca_id});
        res.status(201).send('Produto adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o produto.')
    }
});

router.delete("/", async(req, res) => {
    try {
        const product = req.query;
        console.log(req.query)
        await productService.del(product);
        res.status(200).send('Produto excluído com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir o produto.')
    }
});

module.exports = router