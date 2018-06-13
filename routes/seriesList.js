/* jshint node: true */
/* jshint esversion: 6 */

var express = require('express');
var SeriesListController = require('../controllers/seriesList');
var seriesListRoutes = express.Router();

seriesListRoutes.get('/series/:username', SeriesListController.getSeriesList);
seriesListRoutes.get('/countSeries/:username', SeriesListController.countSeries);
seriesListRoutes.post('/series/', SeriesListController.newSeries);
seriesListRoutes.put('/series/:id', SeriesListController.updateSeries);
seriesListRoutes.delete('/series/:id', SeriesListController.dropSeries);

module.exports = seriesListRoutes;
