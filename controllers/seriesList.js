/* jshint node: true */
/* jshint esversion: 6 */

const SeriesList = require('../models/seriesList');

function getSeriesList(req, res) {
  var username = req.params.username;

  SeriesList.findOne({ name: username }, { series: 1, _id: 0 })
    .sort('+series.id')
    .exec((err, seriesList) => {
      if (err) {
        res
          .status(500)
          .send({ accion: 'get seriesList', error: 'Server Error 500' });
      } else if (!seriesList) {
        res.status(404).send({ accion: 'get seriesList', error: 'Series 404' });
      } else {
        res.status(200).send({ accion: 'get seriesList', data: seriesList });
      }
    });
}

function newSeries(req, res) {
  var params = req.body;

  SeriesList.update(
    { name: params.username, pass: params.pass },
    {
      $push: {
        series: {
          id: params.id,
          name: params.name,
          active: params.active,
          temp: params.temp,
          epA: params.epA
        }
      }
    }
  ).exec((err, newSeries) => {
    if (err) {
      res.status(500).send({ accion: 'save series', error: "Server Error" });
    } else {
      res.status(200).send({ accion: 'save series', data: 'newSeries' });
    }
  });
}

function updateSeries(req, res) {
  var seriesId = req.params.id;

  var params = req.body;

  SeriesList.findOneAndUpdate(
    { name: params.username, pass: params.pass, 'series.id': seriesId },
    {
      $set: {
        'series.$.name': params.name,
        'series.$.active': params.active,
        'series.$.temp': params.temp,
        'series.$.epA': params.epA
      }
    },
    { new: true },
    (err, seriesUpdated) => {
      if (err) {
        res
          .status(500)
          .send({ accion: 'update series', error: 'Server Error 500' });
      } else {
        res
          .status(200)
          .send({ accion: 'update series', data: 'seriesUpdated' });
      }
    }
  );
}

function dropSeries(req, res) {
  var seriesId = req.params.id;

  var params = req.body;

  SeriesList.update(
    { name: params.username, pass: params.pass },
    { $pull: { series: { id: seriesId } } }
  ).exec((err, seriesDropped) => {
    if (err) {
      res
        .status(500)
        .send({ accion: 'delete series', error: 'Server Error 500' });
    } else {
      res.status(200).send({ accion: 'delete series', data: 'seriesDropped' });
    }
  });
}

module.exports = {
  getSeriesList,
  newSeries,
  updateSeries,
  dropSeries
};
