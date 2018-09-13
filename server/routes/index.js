const express = require('express');
const router = express.Router();

const Coffee = require('../models/coffee');

/* GET Coffees listing. */
router.get('/coffees', (req, res, next) => {
    Coffee.find()
        .then(coffeeList => {
            res.json(coffeeList);
        })
        .catch(error => next(error));
});

/* CREATE a new Coffee. */
router.post('/coffees', (req, res, next) => {
    const theCoffee = new Coffee({
        brand: req.body.brand,
        name: req.body.name,
        specs: req.body.specs,
        description: req.body.description,
        origin: req.body.origin
    });

    theCoffee
        .save()
        .then(theCoffee => {
            res.json({
                message: 'New Coffee created!',
                id: theCoffee._id
            });
        })
        .catch(error => next(error));
});

/* GET a single Coffee. */
router.get('/coffees/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Coffee.findById(req.params.id)
        .then(theCoffee => {
            res.json(theCoffee);
        })
        .catch(error => next(error));
});

/* EDIT a Coffee. */
router.put('/coffees/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    const updates = {
        brand: req.body.brand,
        name: req.body.name,
        specs: req.body.specs,
        description: req.body.description,
        origin: req.body.origin
    };

    Coffee.findByIdAndUpdate(req.params.id, updates, { new: true })
        .then(coffee => {
            res.json({
                message: 'Coffee updated successfully'
            });
        })
        .catch(error => next(error));
});

/* DELETE a Coffee. */
router.delete('/coffees/:id', (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({ message: 'Specified id is not valid' });
        return;
    }

    Coffee.remove({ _id: req.params.id })
        .then(message => {
            return res.json({
                message: 'Coffee has been removed!'
            });
        })
        .catch(error => next(error));
});

module.exports = router;
