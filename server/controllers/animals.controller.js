const { response } = require('express');
const Model = require('../models/animals.model.js');

module.exports.findAll = (req, res) => {

    Model.find()
        .then((e) => {
            res.json({ data: e })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}


module.exports.find = (req, res) => {
    //                  important
    Model.findOne({id: req.params.id})
        .then( e =>  res.json({data:e}) )
        .catch( err => res.json({message: 'Something went wrong', error: err}) );
}

module.exports.create = (req,res) => {
    console.log("in create")
    console.log(req.body)
    //           important
    Model.create(req.body)
        .then( e =>  res.json({data:e}))
        .catch( err => {console.log(err); res.json({message: 'Something went wrong', error: err}) });
}

module.exports.update = (req, res) => {
    Model.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        //           important
        { new: true, runValidators: true }
    )
        .then( e =>  res.json({data:e}))
        .catch( err => {console.log(err); res.json({message: 'Something went wrong', error: err}) });
}

module.exports.delete = ( req, res) => {
    // important
    Model.deleteOne( {_id : req.params.id} )
    .then( e =>  res.json({data:e}))
    .catch( err => {console.log(err); res.json({message: 'Something went wrong', error: err}) });
}