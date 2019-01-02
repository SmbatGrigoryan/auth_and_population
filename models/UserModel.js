const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        default: 'unknown'
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;