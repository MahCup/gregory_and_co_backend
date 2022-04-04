class BrandService {
    constructor(BrandModel) {
        this.brand = BrandModel;
    }

    async get() {
        try {
            const brands = await this.brand.findAll();
            return brands;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async getById(BrandData) {
        try {
            const brand = await this.brand.findOne({ where: { id: BrandData.id } });
            return brand;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async add(BrandData) {
        try {
            await this.brand.create(BrandData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async del(BrandData) {
        try {
            const brand = await this.brand.findOne({ where: { nome: BrandData.nome } });
            brand.destroy();
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = BrandService;