let Datastore = require('nedb');
let init = false;

let db = new Datastore({
  filename: './models/zones.db',
  autoload: true,
  timestampData: true
});

if (init) {
  let data = {
    number: '3',
    isOn: false,
    isActive: false
  };

  db.insert(data, (err, d) => {
    if (err) console.log(err);
    console.log('Inserted');
    console.log(d);
  });
}

db.find({}, (err, z) => {
  console.log(z);
});

module.exports = {
  db: db
};
