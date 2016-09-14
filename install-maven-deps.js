const mvn = require('node-java-maven');
const path = require('path');

const options = {
    localRepository: path.resolve('./', './lib')
};

mvn(options, function (err, results) {
    if (err) {
        return console.error(err);
    }
    return console.log(results.classpath);
});

