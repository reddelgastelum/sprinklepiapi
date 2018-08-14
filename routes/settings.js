let express = require('express');
let router = express.Router();

let Zones = require('../models/zones').db;

router.get('/', (req, res) => {
  Zones.find({}, (err, zones) => {
    if (err) console.log(err);

    console.log(zones);

    res.send(zones);
  });
});

router.get('/update/:number/:active', (req, res) => {
  let number = req.params.number;
  let isActive = req.params.active == '1' ? true : false;
  Zones.update({number:number}, {$set: {isActive:isActive}}, (err, numReplaced) => {
    if (err) console.log(err);
    console.log(numReplaced);
  });
});

module.exports = router;
