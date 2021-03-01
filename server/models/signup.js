const mongoose = require('mongoose')
const signupSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: {type:String,require:true},
    roll:{type:String,require:true},
    chem: {type:Number,require:true},
    phys: {type:Number,require:true},
    math: {type:Number,require:true},
    total: {type:Number,require:true},
    percent: {type:Number,require:true},

});
module.exports = mongoose.model('User',signupSchema);