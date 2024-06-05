const questionsModel = require('./data-access/questions.model');
const QuestionService = require('./service/questions.service');
const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://localhost/learningtrackerdb';

//connecting to mongoose
mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
  console.log('Connected to Mongodb');
});

let conceptId = '654541ea52ba2c7b95b9f947';

(async () => {
  console.log('testing .. ');
  let res = await QuestionService.listGroupedQuestions(conceptId);
  console.log(res);
})();
