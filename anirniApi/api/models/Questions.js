'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var QuestionSchema = new Schema({
    mail: {
        type: String,
        required:true

    },
    contenu: {
        type: String

    }
 });

module.exports = mongoose.model('Questions', QuestionSchema);
