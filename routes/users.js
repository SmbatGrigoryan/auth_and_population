const express = require('express');
const router = express.Router();
const User = require('.././models/UserModel');

const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {

let {name} = req.body;
new User({name})
    .save()
    .then( doc => {

      console.log(doc);
        res.send(doc);
    })

});

module.exports = router;
