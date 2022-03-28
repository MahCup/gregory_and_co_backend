const express = require("express");
const router = express.Router();
const { brand } = require('../models')
const BrandService = require('../services/brand')

const brandService = new BrandService(brand);

router.get("/", async(req, res) => {
    try {
        const brands = await brandService.get();
        res.json(brands);
    } catch (err) {
        res.status(400).send('Não foi possível recuperar as marcas.')
    }
});

router.post("/", async(req, res) => {
    try {
        const nome = req.query;
        await brandService.add(nome);
        res.status(201).send('Marca adicionada com sucesso!')
    } catch (err) {
       res.status(400).send('Não foi possível adicionar a marca.')
    }
});

router.delete("/", async(req, res) => {
    try {
        const nome = req.query;
        console.log(req.query)
        await brandService.del(nome);
        res.status(200).send('Marca excluída com sucesso!')
    } catch (err) {
        res.status(400).send('Não foi possível excluir a marca.')
    }
});

module.exports = router