/* jshint node: true */
/* jshint esversion: 6 */

var express = require('express');
var UserController = require('../controllers/user');
var userRoutes = express.Router();

userRoutes.get('/user/:username/:email', UserController.findUser);
userRoutes.get('/shareduser/:username', UserController.sharedUser);
userRoutes.get('/confirmemail/:uniqId', UserController.confirmEmail);
userRoutes.get('/remember/:email', UserController.rememberAuth);
userRoutes.post('/login/', UserController.login);
userRoutes.post('/register/', UserController.register);
userRoutes.put('/changePass/', UserController.changePass);
userRoutes.put('/changeImage/', UserController.changeImage);
userRoutes.delete('/user/', UserController.deleteUser);

module.exports = userRoutes;