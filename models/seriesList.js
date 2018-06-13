/* jshint node: true */
/* jshint esversion: 6 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SeriesListSchema = Schema({
    name: String,
    pass: String,
    email: String,
    confirmId: String,
    active: Boolean,
    creationDate: Date,
    lastDate: Date,
    imageUrl: String,
    series: [{
        _id: false,
        id: String,
        name: String,
        active: Boolean,
        temp: Number,
        epA: Number
    }],
});

// exportamos el modelo
module.exports = mongoose.model('SeriesList', SeriesListSchema);