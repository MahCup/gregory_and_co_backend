class UserService {
    constructor(UserModel) {
        this.user = UserModel;
    }

    async get (){
        try {
            const users = await this.user.findAll();
            return users;
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }

    // tratamento de regras de negócio
    async add (UserData) {
        try {
            await this.user.create(UserData);
        } catch (erro) {
            console.error(erro.message);
            throw erro;
        }
    }
}

module.exports = UserService;