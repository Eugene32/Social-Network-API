const { Schema, model } = require('mongoose');


const thoughtSchema = new Schema(
    {

        thoughtText: {
            type: String,
            required: [true, 'Please enter Your Thoughts.'],
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: String,
            default: Date.now,
        },
        username: {
            type: String,
            required: [true, 'Enter username.'],
        },
        comments: [commentSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getter: true,
        },
        id: false,
    }
);


thoughtSchema.virtual('commentCount').get(function () {
    return this.comments.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;