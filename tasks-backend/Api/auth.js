const { authSecret } = require("../env");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt-nodejs");

module.exports = app => {
    const signin = async (request, response) => {
        if (!request.body.email || !request.body.password)
            return response.status(400).send("Dados imcompletos!");

        const user = await app.db("users")
            .whereRaw("LOWER(email) = LOWER(?)", request.body.email)
            .first();

        if (user) {
            bcrypt.compare(request.body.password, user.password, (error, isMatch) => {
                if (error || !isMatch) return response.status(401).send("A senha informada é inválida!");

                const payload = { id: user.id };

                response.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret)
                });
            })
        } else
            response.status(400).send("Email não encontrado!");
    }

    return { signin };
}