const path = require('path');

//BASE FILE NAME
console.log(path.basename(__filename))

//DIRECTORY NAME
console.log(path.basename(__dirname))

//FILE EXTENSION
console.log(path.extname(__filename))

// CREATE PATH OBJECT
console.log(path.parse(__filename))

//JOIN PATHS 
console.log(path.join(__dirname, 'newDirectory', 'hello.html'));