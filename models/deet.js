const mongoose = require('mongoose')


const deetSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model('deet', deetSchema);