const express = require('express');
const router = express.Router();

const Notes = require('../notesModel/notesModel.js');


router
    .route('/:id')
    .delete((req, res) => {
        const { id } = req.params;
        Notes
            .findByIdAndRemove(id)
            .then(deletedNote => {
                res.status(201).json({ deletedNote })
            })
            .catch(err => {
                conole.log(err)
                res.status(500).json({ errorMessage: err })
            })
    })

module.exports = router;