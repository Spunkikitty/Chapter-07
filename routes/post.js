const express = require('express');
const router = express.Router();

//const auth = require('../middleware/auth');
//const multer = require('../middleware/multer-config');

const postCtrl = require('../controllers/post');

router.post('/',  postCtrl.createPost);
//router.post('/',  postCtrl.modifyPost);
//router.post('/:id/like',  postCtrl.likePost);