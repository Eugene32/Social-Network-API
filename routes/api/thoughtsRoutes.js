const router = require('express').Router();
const {
    getAll,
    getOne,
    createOne,
    updateOne,
    deleteOne,
    addComment,
    deleteComment,
} = require('../../controllers/thoughtController');


router
    .route('/')
    .get(getAll)
    .post(createOne);

router
    .route('/:thoughtId')
    .get(getOne)
    .put(updateOne)
    .post(addComment)
    .delete(deleteOne);

router
    .route('/:thoughtId/:commentId')
    .delete(deleteComment);



module.exports = router;