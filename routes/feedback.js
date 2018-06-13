/* jshint node: true */
/* jshint esversion: 6 */

var express = require('express');
var FeedbackController = require('../controllers/feedback');
var feedbackRoutes = express.Router();

feedbackRoutes.post('/sendfeedback/', FeedbackController.sendFeedback);
feedbackRoutes.post('/getfeedback/', FeedbackController.getFeedback);

module.exports = feedbackRoutes;
