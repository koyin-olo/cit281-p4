const { data } = require('./p4-data.js');

//returns an array of strings where each array element is a question
function getQuestions() {
    const result = [];
    for (let i = 0; i < data.length; i++) {
      const obj = data[i];
      const { question } = obj;
      result.push(question);
    };
    return result;
};

//returns an array of strings where each array element is an answer
function getAnswers() {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const obj = data[i];
    const { answer } = obj;
    result.push(answer);
  };
  return result;
};


//returns a copy of the original data array of objects
function getQuestionsAnswers() {
  const clonedData = [...data];
  return clonedData;
};


//returns an object with a question, number, and error property
function getQuestion(number = "") {
  const obj = {
    error: '',
    question: '',
    number: ''
  };

  if (typeof(number) === 'string') {
    obj.error = 'Question number must be an integer'
    return obj;
  }else if (number < 1 ) {
    obj.error = 'Question number must be >= 1';
    return obj;
  }else if (number > data.length) {
    obj.error = 'Question number must be less than the number of questions (3)';
    return obj;
  }else {
    obj.question = `Q${number}`;
    obj.number = number;
    return obj;
  };
};


//returns an object with a answer, number, and error property
function getAnswer(number = "") {
  const obj = {
    error: '',
    answer: '',
    number: ''
  };

  if (typeof(number) === 'string') {
    obj.error = 'Answer number must be an integer'
    return obj;
  }else if (number < 1) {
    obj.error = 'Answer number must be >=1';
    return obj;
  }else if (number > data.length) {
    obj.error = 'Answer number must be less than the number of questions (3)';
    return obj;
  }else {
    obj.answer = `A${number}`;
    obj.number = number;
    return obj;
  };
};


function getQuestionAnswer(number = "") {
  const obj = {
    error: '',
    question: '',
    number: '',
    answer: ''
  };

  if (typeof(number) == 'string') {
    obj.error = 'Question number must be an integer'
    return obj;
  }else if (number < 1 ) {
    obj.error = 'Question number must be >= 1';
    return obj;
  }else if (number > data.length) {
    obj.error = 'Question number must be less than the number of questions (3)';
    return obj;
  }else {
    obj.question = `Q${number}`;
    obj.answer = `A${number}`;
    obj.number = number;
    return obj;
  }
};

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;

// getQuestions()
if (testGetQs) {
  testing("getQuestions", { d: "()", f: getQuestions() });
}

// getAnswers()
if (testGetAs) {
  testing("getAnswers", { d: "()", f: getAnswers() });
}

// getQuestionsAnswers()
if (testGetQsAs) {
  testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
}

// getQuestion()
if (testGetQ) {
  testing(
    "getQuestion",
    { d: "()", f: getQuestion() },      // Extra credit: +1
    { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
    { d: "(1)", f: getQuestion(1) },
    { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
  );
}

// getAnswer()
if (testGetA) {
  testing(
    "getAnswer",
    { d: "()", f: getAnswer() },        // Extra credit: +1
    { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
    { d: "(1)", f: getAnswer(1) },
    { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
  );
}

// getQuestionAnswer()
if (testGetQA) {
  testing(
    "getQuestionAnswer",
    { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
    { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
    { d: "(1)", f: getQuestionAnswer(1) },
    { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
  );
}
module.exports = {
  getQuestions,
  getAnswers,
  getQuestionsAnswers,
  getQuestion,
  getAnswer,
  getQuestionAnswer
};