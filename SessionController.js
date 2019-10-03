const User = require('../models/User');

// index(criar listagem de sessões), show(lista uma única sessão), store(criar uma sessão), update(alterar uma sessão), destroy

module.exports = {
    async store(req, res){ //""req" recebe todas as informações que o usuário esta enviando para a requisição (carrinho de compra) e o "res" vai ser a resposta obtida
        const { email } = req.body;// json = Java script objective notation

        let user = await User.findOne({ email }); //Verifica se o email ja foi utilizado

        if (!user){
            user = await User.create({ email }); //await espera a resposta ser enviada paar proseeguir o código
        }

        return res.json(user);
    }
};