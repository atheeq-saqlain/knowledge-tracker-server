var express = require('express');
var router = express.Router();
const Concept = require('../data-access/concepts.model');

/* GET home page. */
router.get('/', async function (req, res, next) {
  let foundConcepts = await Concept.find().populate('preRequisitConcepts');

  res.send(foundConcepts);
});

//adding a new concept
router.post('/newconcept', async function (req, res, next) {
  console.log(req.body);
  let concept = new Concept(req.body);

  console.log('concept before save ', concept);

  concept = await concept.save();

  console.log('concept after save ', concept);

  // concept.save((err) => {
  //   if (err) {
  //     console.log(err);
  //   } else console.log("the document is saved");
  // });

  res.send(concept);

  //res.send("add new concept here ...");
});

module.exports = router;
