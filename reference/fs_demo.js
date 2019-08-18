
const fs = require('fs')
const path = require('path');

 //CREATE FOLDER
/*  fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
    if(err) throw err
    console.log('Folder created...')
}) */

//CREATE FILE AND WRITE IN IT
/* fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'),
    'Hello World!',
    err => {
        if(err) throw err;
        console.log('File written to...');
    }
)

//APPEND TO A EXISTING FILE
fs.appendFile(
    path.join(__dirname, '/test', 'hello.txt'),
    ' I LOVE Node.js!',
    err => {
        if(err) throw err
        console.log('File append to...')
    }
) */

//READ A FILE
/* fs.readFile(path.join(__dirname, 'test', 'hello.txt'),
            'utf8',
            (err, content) => {
                if (err) throw err;
                console.log(content)
            }
) */

//RENAME A FILE
fs.rename(path.join(__dirname, 'test', 'hello.txt'),
          path.join(__dirname, 'test', 'helloWorld.txt'),
          err => {
              if(err) throw err;
              console.log("File renamed...")
          })
            