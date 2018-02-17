'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = function(app) {
    var question = require('../controller/Question_Controller');

    app.get('/', function(req, res, next) {

        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("The aze   and time are currently: "  );
        res.end();});

    // question Routes
    app.route('/questions')
        .get(question.list_all_questions)
        .post(question.create_a_question);


    app.route('/questions/:questionId')
        .get(question.read_a_question)
        .put(question.update_a_question)
        .delete(question.delete_a_question);
};
