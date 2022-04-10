const { User, Thought } = require('../models');

module.exports = {

    getUsers(req, res) {
        console.info("Get all users")
        User.find({})
            .populate({
                path: 'thoughts',
                select: '-__v'
            })
            .populate({
                path: 'friends',
                select: '-__v'
            })
            .then((users) => res.json(users))
            .catch((err) => {
                console.log(err);
                return res.status(500).json({ message: err.message });
            });
    },
    getSingleUser(req, res) {
        console.info("Retrive one user by id.")
        User.findOne({ _id: req.params.userId })
            .select('-__v')
            .lean()
            .then(async (user) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : res.json({user})
            )
            .catch((err) => {
                console.log(err);
                return res.status(500).json({ message: err.message });
            });
    },
    createUser(req, res) {

        User.create(req.body)
            .then((user) => {
                res.status(201).json(user);
                console.info("User created");
            })
            .catch((err) => res.status(400).json({ message: err.message }));
    },
    updateUser(req, res) {
        console.log("User updated")
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true, runValidators: true })
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No user found!' });
                    return;
                }
                res.json(user);
            })
            .catch(err => res.status(400).json({ message: err.message }));
    },
    deleteUser(req, res) {
        console.log("deleting a user")
        User.findOneAndRemove({ _id: req.params.userId })
            .then((user) =>
                !user
                    ? res.status(404).json({ message: 'No user found!' })
                    : Thought.findOneAndUpdate(
                        { users: req.params.userId },
                        { $pull: { users: req.params.userId } },
                        { new: true }
                    )
            )
            .then((thought) =>
                !thought
                    ? res.status(404).json({
                        message: 'User deleted, but no thoughts found',
                    })
                    : res.json({ message: 'User deleted' })
            )
            .catch((err) => {
                console.log(err);
                res.status(500).json({ message: err.message });
            });
    },
    addFriend(req, res) {
        console.log("adding a friend")
        User.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { friends: req.params.friendId } },
            { new: true }
        )
            .then(user => {
                if (!user) {
                    res.status(404).json({ message: 'No user found!' });
                    return;
                }
                res.json(user);
            })
            .catch(err => res.json({ message: err.message }));
    },

    removeFriend(req, res) {

        User.findOneAndUpdate(
            { _id: req.params.id },
            { $pull: { friends: req.params.friendId } },
            { new: true }
        )
            .then(
                user => res.json(user),
                console.info('Deleted friend from record.')
            )
            .catch(err => res.json({ message: err.message }));
    }
}