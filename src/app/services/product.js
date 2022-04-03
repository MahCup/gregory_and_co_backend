class ProductService {
    constructor(ProductModel) {
        this.product = ProductModel;
    }

    async get() {
        try {
            const products = await this.product.findAll();
            return products;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async getById(ProductData) {
        try {
            const product = await this.product.findOne({ where: { id: ProductData.id } });
            return product;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async add(ProductData) {
        try {
            await this.product.create(ProductData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async del(ProductData) {
        try {
            const product = await this.product.findOne({ where: { id: ProductData.id } });
            product.destroy();
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = ProductService;