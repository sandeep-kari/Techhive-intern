const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://sandeep:Icarusfalls2018@Models.izabenk.mongodb.net/'

const app = express()
const Model = require('./models/deet')

mongoose.connect(url)
mongoose.connection.once('connected', () => { console.log('Database Connected') });

app.use(express.json())



app.get('/', async (req, res) => {
    try {
        const data = await Model.find()
        res.json(data)
    }
    catch (err) {
        res.send('error' + err)
    }
})


app.get('/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    }
    catch (err) {
        res.send('error' + err)
    }
})


app.post('/', async (req, res) => {
    console.log(req.body.name)
    const data = new Model({
        name: req.body.name,
        tech: req.body.tech
    })


    try {
        const a1 = await data.save()
        res.status(200).json(a1)
    } catch (err) {
        res.send('error')
    }
})

app.patch('/:id', async (req, res) => {
    try {
        const Model = await Model.findById(req.params.id)
        const a1 = await Model.save()
        res.json(a1)
    } catch (err) {
        res.send('error')
    }
})

app.delete('/:name', async (req, res) => {
    try {
        const jinx = req.params.name
        const data = await Model.findOneAndDelete({ name: jinx })
        res.json(data)
    } catch (err) {
        res.send('error')
    }
})


app.listen(3000, () => {
    console.log('server started')
})