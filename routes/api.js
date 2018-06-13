/* jshint node: true */
/* jshint esversion: 6 */

var express = require('express');
var api = express.Router();
var userRoutes=require('./user')
var seriesListRoutes=require('./seriesList')
var feedbackRoutes=require('./feedback')

api.use('/user', userRoutes);
api.use('/seriesList', seriesListRoutes);
api.use('/feedback', feedbackRoutes);

api.get('/', function hello(req, res) {
  res.status(200).send({
    msg: 'Welcome to MyWatchListAPI',
    error: 'There is nothing here in /'
  });
});

module.exports = api;
