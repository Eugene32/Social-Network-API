const { Schema, model } = require('mongoose');


const userSchema = new Schema({

    username: {
        type: String,
        required: [true, 'Please enter Your Name'],
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
            'Please add a valid Email address.'],
        required: [true, 'Please enter Email Address'],
        unique: true,
        lowercase: true,
        dropDups: true,
    },
    thoughts: [{
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }],
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
},
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false
    }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});


const User = model('User', userSchema);

module.exports = User;

