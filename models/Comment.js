const { Schema, Types } = require('mongoose');


const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        commentBody: {
            type: String,
            required: [true, 'Please enter your message.'],
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: [true, 'Please enter your username.']
        },
        createdAt: {
            type: String,
            default: Date.now
        },
    },
    {
        toJSON: {
            getter: true,
        },
        id: false,
    }
)


module.exports = reactionSchema;