const mongoose = require('mongoose')

const design = mongoose.Schema({
    
    image:  {type:String},
    Title : {type:String},
    Content : {type:String},
    Author : {type:String},
    Details:{type:String},
    CreatedAt: {type: Date,default: Date.now()}

},{versionKey:false})

const model = mongoose.model('collections',design)

module.exports = model