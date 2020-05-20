const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    message: {
        type: String,
        required: true
    },
    chat: {
        type: Schema.ObjectId,
        ref: 'Chat'
    },
    date: Date
});

const MessageModel = mongoose.model('Message', messageSchema);
module.exports = MessageModel;