const { Sequelize } = require("sequelize");
const { Sequelize, Model, DataTypes } = require("sequelize");
 const express = require('express');
 const router = express.Router();

 const auth = require('../middleware/auth');
 const multer = require('../middleware/multer-config');

 const postCtrl = require('../controllers/post');

  router.post('/',  postCtrl.createPost);
  router.post('/',postCtrl.modifyPost);
  router.post('/',postCtrl.deletePost); 
 router.post('/',postCrtl.getAllPost); 
  router.post('/',postCrt.getOnePost); 
  router.post('/:id/like', postCtrl.likePost);

 module.exports = router;