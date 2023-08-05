const express = require('express')
const router = express.Router()
const deet = require('../models/deet')

router.get('/', async (req, res) => {
    try {
        const deets = await deet.find()
        res.json(deets)
    }
    catch (err) {
        res.send('error' + err)
    }
})


router.get('/:id', async (req, res) => {
    try {
        const deet = await deet.findById(req.params.id)
        res.json(deet)
    }
    catch (err) {
        res.send('error' + err)
    }
})


router.post('/', async (req, res) => {
    const deet = new deet({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })


    try {
        const a1 = await deet.save()
    } catch (err) {
        res.send('error')
    }
})

router.patch('/id', async (req, res) => {
    try {
        const deet = await deet.findById(req.params.id)
        deet.sub = req.body.sub
        const a1 = await deet.save()
        res.json(a1)
    } catch (err) {
        res.send('error')
    }
})

router.delete('/id', async (req, res) => {
    try {
        const deet = await deet.findById(req.params.id)
        deet.sub = req.body.sub
        const a1 = await deet.remove()
        res.json(a1)
    } catch (err) {
        res.send('error')
    }
})



module.exports = router