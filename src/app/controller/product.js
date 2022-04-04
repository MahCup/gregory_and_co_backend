const express = require("express");
const router = express.Router();
const { product } = require('../models')
const ProductService = require('../services/product')

const productService = new ProductService(product);

router.get("/list", async(req, res) => {
    try {
        const products = await productService.get();
        res.json(products);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os produtos.')
    }
});

router.post("/page", async(req, res) => {
    try {
        const page = req.body.page;
        const products = await productService.getPaginated(page);
        res.json(products);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar os produtos.')
    }
});

router.post("/", async(req, res) => {
    try {
        const product = await productService.getById(req.query);
        res.json(product);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar o produto pelo id especificado.')
    }
});

// tratamento de requisições e respostas
router.post("/", async(req, res) => {
    try {

        console.log(req.body)
        const nome = req.body.nome,
        preco = req.body.preco,
        numeracao = req.body.numeracao,
        cor = req.body.cor,
        palmilha_anti_odor= req.body.palmilha_anti_odor,
        material = req.body.material,
        publico = req.body.publico,
        tipo_de_fechamento = req.body.tipo_de_fechamento,
        amortecedor = req.body.amortecedor,
        brand_id = req.body.brand_id;

        await productService.add({nome, preco, numeracao, cor, palmilha_anti_odor, material, publico, tipo_de_fechamento, amortecedor, brand_id});
        res.status(201).send('Produto adicionado com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível adicionar o produto.')
    }
});

router.delete("/", async(req, res) => {
    try {
        console.log(req.body)
        const product = req.body;
        await productService.del(product);
        res.status(200).send('Produto excluído com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir o produto.')
    }
});

module.exports = router