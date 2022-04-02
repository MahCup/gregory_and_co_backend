class AdressService {
    constructor(AdressModel) {
        this.adress = AdressModel;
    }

    async get() {
        try {
            const adresses = await this.adress.findAll();
            return adresses;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async add(AdressData) {
        try {
            await this.adress.create(AdressData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    async del(AdressData) {
        try {
            const adress = await this.adress.findOne({ where: { id: AdressData.id } });
            adress.destroy();
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = AdressService;