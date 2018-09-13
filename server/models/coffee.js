const mongoose = require('mongoose');

const coffeeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, 'The coffee brand is required']
    },
    name: {
        type: String,
        required: [true, 'The coffee name is required']
    },
    origin: {
        type: String,
        default: ''
    },
    specs: {
        type: Array,
        default: []
    },
    description: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default:
            'https://user-images.githubusercontent.com/23629340/42820504-a2abcae2-89d6-11e8-8aaa-d8e83c21eccb.png'
    }
});

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;
