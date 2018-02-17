var mongoose = require('mongoose'),
    Question = mongoose.model('Questions');

exports.list_all_questions = function (req, res) {
    Question.find({}, function (err, question) {
        if (err)
            res.send(err);
        res.json(question);
    });
};


exports.create_a_question = function (req, res) {
    var new_question = new Question(req.body);
    new_question.save(function (err, question) {
        if (err)
            res.send(err);
        res.json(question);
    });
};

exports.read_a_question = function (req, res) {
    Question.findById(req.params.questionId, function (err, question) {
        if (err)
            res.send(err);
        res.json(question);
    });
};
exports.update_a_question = function (req, res) {
    Question.findOneAndUpdate({_id: req.params.questionId}, req.body, {new: true}, function (err, question) {
        if (err)
            res.send(err);
        res.json(question);
    });
};


exports.delete_a_question = function (req, res) {


    Question.remove({
        _id: req.params.questionId
    }, function (err, question) {
        if (err)
            res.send(err);
        res.json({message: 'question successfully deleted'});
    });
};