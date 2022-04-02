class OrderService {
    constructor(OrderModel) {
        this.order = OrderModel;
    }

    async get() {
        try {
            const orders = await this.order.findAll();
            return orders;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async add(OrderData) {
        try {
            await this.order.create(OrderData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async del(OrderData) {
        try {
            const order = await this.order.findOne({ where: { id: OrderData.id } });
            order.destroy();
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = OrderService;