const express = require('express');
const router = express.Router();
const { Sequelize } = require('sequelize');
const userCtrl = require('../controllers/user');

//router.post('/signup', userCtrl.signup);
//router.post('/login', userCtrl.login);
router.get('/getAll', userCtrl.getAll)

//module.exports = router;