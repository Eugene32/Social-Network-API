const { Schema, Types } = require('mongoose');


const commentSchema = new Schema(
    {
        commentId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        commentBody: {
            type: String,
            required: [true, 'Please enter your comment.'],
            trim: true,
            minlength: 1,
            maxlength: 360
        },
        username: {
            type: String,
            required: [true, 'Please enter your username.']
        },
        createdAt: {
            type: String,
            default: Date("<YYYY-mm-dd HH:MM:ss>")  // Displays UTC date as per format and timezone of user
        },
    },
    {
        toJSON: {
            getter: true,
        },
        id: false,
    }
)


module.exports = commentSchema;