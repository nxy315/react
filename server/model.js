const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/demo';
mongoose.connect(DB_URL);

const models = {
    user: {
        'user': {type: String, require: true},
        'pwd': {type: String, require: true},
        'type': {type: String, require: true}
    },
    chat: {}

}