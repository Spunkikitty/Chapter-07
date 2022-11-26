const express = require('express');
const router = express.Router();
const {Sequelize} = require('sequelize');

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const postCtrl = require('../controller/Post');

router.post('/', postCtrl.createPost);
router.post('/', postCtrl.modifyPost);
router.post('/', postCtrl.deletePost);
router.post('/', postCtrl.getAllPost);
router.post('/', postCrtl.getOnePost);
router.post('/:id/postReadBy', postCtrl.postReadBy);

module.exports = router;
