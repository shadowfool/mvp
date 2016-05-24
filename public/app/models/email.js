var mongoose = require('mongoose');

module.exports = mongoose.model('email', {
    email: {type : String, default: ''},
    party: {type : String, default: ''}
});