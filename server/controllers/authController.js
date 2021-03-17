const bcrypt = require('bcryptjs')
module.exports = {
    register: async (req, res) => {
        const db = req.app.get('db')
        const { email, firstName, password } = req.body
        const [existingUser] = await db.get_user_by_email([email])

        if (existingUser) {
            return res.status(409).send('Email already in use')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const [newUser] = await db.create_new_user([email, firstName, hash])
        delete newUser.hash
        console.log(newUser)
        req.session.user = newUser
        res.status(200).send(req.session.user)

    },
    login: (req, res) => {

    },
    logout: (req, res) => {

    },
    getUser: (req, res) => {
        console.log('hit')
    }
}