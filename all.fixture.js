require('babel-core/register');
require('babel-polyfill');

module.exports = {
    default: [
        require('./orders').default,
    ],
};