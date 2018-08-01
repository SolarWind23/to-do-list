const path = require('path');

module.exports = {
    entry: './js/app.js',
    output:{
        filename:'bunble.js',
        path: path.resolve(__dirname, 'build')
    }
}