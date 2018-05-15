const fs = require('fs');
const path = require('path');

module.exports = function (source, map) {
    let callback = this.async();
    let currentDirectory = this.request.split('!');
    currentDirectory = currentDirectory[currentDirectory.length-1].split('/').slice(0, -1).join('/');

    callback(null, source.replace(/\$inline\(['"]([^'"]+)['"]\)/g, (match, pathToFile) => {
        let fileLocation = path.resolve(currentDirectory, pathToFile);
        this.addDependency(fileLocation);
        return fs.readFileSync(fileLocation);
    }), map);
};
