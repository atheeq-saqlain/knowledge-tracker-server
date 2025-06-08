const ConceptTrackerService = require('./service/conceptTracker.service');
const SubjectService = require('../subject/service/subjects.service');
const mongoose = require('mongoose');
const DATABASE_URL = 'mongodb://localhost/learningtrackerdb';

// immediate invokation
(async () => {
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
    testFucntion();
  });
})();

const testFucntion = async () => {
  let subjectId = '674e80dfa2e41dc2d859680f'; //'654541ea52ba2c7b95b9f947';
  let userId = '6832f4cb99bc6f88b1a28675';

  console.log('testing .. ');
  // let subject = (await SubjectService.searchSubject('Mathematics'))[0];
  // console.log('subject : ', subject.name);
  let res = await ConceptTrackerService.getProgress(userId, subjectId);
  console.log('res : \n', JSON.stringify(res, null, 2));

  console.log('=======');
  console.log(`subject mastery : ${res.mastery}`);
  console.log('=======');

  return;
};
