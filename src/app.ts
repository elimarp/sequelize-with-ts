import express, { json } from 'express'
import sequelize from './database'
import User from './app/models/User'
// import User2 from './app/models/User2'

const app = express()

app.use(json())

app.post('/users', async (req, res) => {
    try {
        const { name, email } = req.body
        const user = await User.create({name, email})
        return res.json({})   
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ error })
    }
})

app.get('/users', async (req, res) => {
    try {
        const users = await User.findAll()
        return res.json(users)
    } catch (error) {
        console.warn(error)
        return res.status(500).json({ error })
    }
})

app.listen(3333, async () => { 
    await sequelize.sync({ force: true })
    console.log('Listening on 3333')
})