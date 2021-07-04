const { Schema, model } = require('mongoose');

const testsSchema=Schema({
    question:{
        type:String,
        // required: [true, 'Question is required'],
    },
    options:{
        type:Array,
        // required: [true, 'Options is required'],
    },
    answer:{
        type:Array,
        // required: [true, 'Answer is required'],
    }
});


const Test=model('test',testsSchema );

module.exports= Test;