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
        req.session.user = newUser
        res.status(200).send(req.session.user)

    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const { email, password } = req.body

        const [existingUser] = await db.get_user_by_email([email])
        if (!existingUser) {
            return res.status(404).send('User with that email does not exist')

        }


        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash)
        if (!isAuthenticated) {
            return res.status(409).send('Email or password is incorrect')
        }

        delete existingUser.hash
        req.session.user = existingUser
        res.status(200).send(req.session.user)
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)

    },
    getUser: (req, res) => {
        if (!req.session.user) {
            return res.status(404).send('Please login')

        }
        res.status(200).send(req.session.user)
    }
}