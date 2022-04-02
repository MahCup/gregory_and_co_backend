class ItemService {
    constructor(ItemModel) {
        this.item = ItemModel;
    }

    async get() {
        try {
            const itens = await this.item.findAll();
            return itens;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async add(ItemData) {
        try {
            await this.item.create(ItemData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async del(ItemData) {
        try {
            const item = await this.item.findOne({ where: { id: ItemData.id } });
            item.destroy();
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = ItemService;