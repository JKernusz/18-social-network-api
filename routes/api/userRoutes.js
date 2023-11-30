const express = require('express');
const router = require('express').Router();
const {
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getUsers,
    addFriend,
    removeFriend,
} = require('../../controllers/usercontroller');

router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getUserById).put(updateUser).delete(deleteUser);

router .route('/:userId/friends/:friendId').post(addFriend).delete(removeFriend);

module.exports = router;




module.exports = router;
