const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');


const thoughtSchema = new Schema(
    {

        thoughtText: {
            type: String,
            required: [true, 'Missing input.'],
            minlength: 1,
            maxlength: 360
        },
        createdAt: {
            type: String,
            default: Date("<YYYY-mm-dd HH:MM:ss>"),
        },
        username: {
            type: String,
            required: [true, 'Username needed.'],
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