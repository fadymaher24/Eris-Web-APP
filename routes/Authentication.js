const path = require('path');

const express = require('express');

const AuthenticationController = require('../controllers/Authentication');

const router = express.Router();

router.get('/login', AuthenticationController.getlogin);

router.post("/sign_up", AuthenticationController.signup);

router.post('/log_in', AuthenticationController.login);






module.exports = router;