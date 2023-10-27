const fs = require('fs');
const path = require('path');

const directoryPath = '../images'; // Replace with the actual folder path

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    const fileNames = files.filter(file => {
        return fs.statSync(path.join(directoryPath, file)).isFile();
    });

    console.log(fileNames);
});
