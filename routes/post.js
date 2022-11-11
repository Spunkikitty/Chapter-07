
const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');

 const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

 const postCtrl = require('../controller/post');

  router.post('/',  postCtrl.createPost);
  router.post('/',postCtrl.modifyPost);
  router.post('/',postCtrl.deletePost); 
 router.post('/',postCrtl.getAllPost); 
  router.post('/',postCrt.getOnePost); 
  router.post('/:id/readBy', postCtrl.readBy);

 module.exports.Sequelize = router;