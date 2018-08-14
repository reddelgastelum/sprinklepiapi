let fs = require('fs');

fs.watch('./models/zones.db', (eventType, filename) => {
  console.log(`Event type is: ${eventType}`);
  if (filename) {
    console.log(`Filename provided: ${filename}`);
  } else {
    console.log(`Filename not provided`);
  }
});
