const express = require('express');
const router = express.Router();
const { Sequelize } = require('Sequelize');
const userCtrl = require('../controllers/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);
router.get('/', userCtrl.login)

module.exports = router;