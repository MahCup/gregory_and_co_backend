class InventoryService {
    constructor(InventoryModel) {
        this.inventory = InventoryModel;
    }

    async get() {
        try {
            const inventories = await this.inventory.findAll();
            return inventories;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async add(InventoryData) {
        try {
            await this.inventory.create(InventoryData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async del(InventoryData) {
        try {
            const brand = await this.inventory.findOne({ where: { id: InventoryData.id } });
            brand.destroy();
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = InventoryService;