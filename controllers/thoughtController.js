const { User, Thought } = require('../models');

module.exports = {
    getAll(req, res) {
        console.log("getting thoughts")
        Thought.find({})
            .select('-__v')
            .sort({ _id: -1 })
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json({ message: err.message }));
    },

    getOne(req, res) {
        console.log("getting single thought")
        Thought.findOne({ _id: req.params.thoughtId })
            .select('-__v')
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json({ message: err.message }));
    },

    createOne(req, res) {
        console.log("creating thought")
        Thought.create(req.body)
            .then((thought) => {
                return User.findOneAndUpdate(
                    { _id: req.body.userId },
                    { $push: { thoughts: thought } },
                    { new: true, runValidators: true }
                )
            })
            .then((thought) =>
                !thought
                    ? res.status(404).json({
                        message: 'No thought found with that ID'
                    })
                    : res.json({ message: 'Thought has been created' }))
            .catch((err) => {
                console.log(err);
                return res.status(500).json({ message: err.message });
            });
    },

    deleteOne(req, res) {
        console.log("deleting thought")
        Thought.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with that ID' })
                    : User.deleteMany({ _id: { $in: thought.users } })
            )
            .then(() => res.json({ message: 'Thought has been deleted!' }))
            .catch((err) => res.status(500).json({ message: err.message }));
    },

    updateOne(req, res) {
        console.log("updating thought")
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json({ message: err.message }));
    },

    addComment(req, res) {
        console.log('You are adding a reaction');
        console.log(req.body);
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { comments: req.body } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID :(' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json({ message: err.message }));
    },

    deleteComment(req, res) {
        console.log("removing comment")
        Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { comments: { commentId: req.params.commentId } } },
            { runValidators: true, new: true }
        )
            .then((thought) =>
                !thought
                    ? res
                        .status(404)
                        .json({ message: 'No thought found with that ID :(' })
                    : res.json(thought)
            )
            .catch((err) => res.status(500).json({ message: err.message }));
    },
};