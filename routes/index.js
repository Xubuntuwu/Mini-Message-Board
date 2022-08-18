const express = require('express');
const router = express.Router();

let messages = [
  {
    text:'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  }
];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Space Messageboard', messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({text: req.body.text, user: req.body.name, added: new Date()});
  res.redirect('/');
});















module.exports = router;