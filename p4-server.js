const fastify = require("fastify")();
const { 
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer } = require('./p4-module.js');

//returns all questions
fastify.get('/cit/question', (request, reply) => {
    const obj = {
        error: '',
        statusCode: '200',
        questions: getQuestions()
    };
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(obj);
});

//returns all answers
fastify.get('/cit/answer', (request, reply) => {
    const obj = {
        error: '',
        statusCode: '200',
        answers: getAnswers()
    };
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(obj);
});

//returns all questions and answers
fastify.get('/cit/questionanswer', (request, reply) => {
    const obj = {
        error: '',
        statusCode: '200',
        questions_answers: getQuestionsAnswers()
    };
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(obj);
});

//returns a specific question
fastify.get('/cit/question/:number', (request, reply) => {
    const reqNumberstr = request.params.number;
    const reqNumber = parseInt(reqNumberstr);
    const reqQuestion = getQuestion(reqNumber);
    const {error: clientError, question: clientQuestion, number: clientNumber} = reqQuestion;
    const obj = {
        error: clientError,
        statusCode: '200',
        question: clientQuestion,
        number: clientNumber
    };
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(obj);
});

//returns a specific answer
fastify.get('/cit/answer/:number', (request, reply) => {
    const reqNumberstr = request.params.number;
    const reqNumber = parseInt(reqNumberstr);
    const reqAnswer = getAnswer(reqNumber);
    const {error: clientError, answer: clientAnswer, number: clientNumber} = reqAnswer;
    const obj = {
        error: clientError,
        statusCode: '200',
        answer: clientAnswer,
        number: clientNumber
    };
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(obj);
});

//returns a specific question and answer
fastify.get('/cit/questionanswer/:number', (request, reply) => {
    const reqNumberstr = request.params.number;
    const reqNumber = parseInt(reqNumberstr);
    const reqQuestionAnswer = getQuestionAnswer(reqNumber);
    const {error: clientError, question: clientQuestion, answer: clientAnswer, number: clientNumber} = reqQuestionAnswer;
    const obj = {
        error: clientError,
        statusCode: '200',
        question: clientQuestion,
        answer: clientAnswer,
        number: clientNumber
    };
    reply
        .code(200)
        .header('Content-Type', 'application/json')
        .send(obj);
});

//unmatched route handler
fastify.get('*', (request, reply) => {
    const obj = {
        error: 'Route not found',
        statusCode: 404
    }
    reply
        .code(404)
        .header('Content-Type', 'application/json')
        .send(obj);
});

const listenIP = 'localhost';
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if(err) {
        console.log(err);
        process.exit(1);
    };
    console.log(`Server is listening on ${address}`);
});