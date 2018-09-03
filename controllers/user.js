/* jshint node: true */
/* jshint esversion: 6 */

const uniqid = require('uniqid');
const nodemailer = require('nodemailer');
const sha256 = require('fast-sha256');
const SeriesList = require('../models/seriesList');
const constants = require('../constants');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: constants.email,
        pass: constants.pass
    }
});

function findUser(req, res) {
    SeriesList.find({ $or: [{ name: req.params.username }, { email: req.params.email }] }, { _id: 0, series: 0, __v: 0, pass: 0 }).exec((err, user) => {
        if (err) {
            res.status(500).send({ accion: 'get user', error: 'Server Error 500' });
        } else if (!user[0]) {
            res.status(404).send({ accion: 'get user', error: 'User 404' });
        } else if (user[0].name === req.params.username) {
            res.status(200).send({ accion: 'get user', data: 'username' });
        } else if (user[0].email === req.params.email) {
            res.status(200).send({ accion: 'get user', data: 'email' });
        }
    });
}

function sharedUser(req, res) {
    SeriesList.find({ name: req.params.username }, { _id: 0, name: 1, imageUrl: 1 }).exec((err, user) => {
        if (err) {
            res.status(500).send({ accion: 'get user', error: 'Server Error 500' });
        } else if (!user[0]) {
            res.status(404).send({ accion: 'get user', error: 'User 404' });
        } else if (user[0].name === req.params.username) {
            res.status(200).send({ accion: 'get user', data: user });
        }
    });
}

function login(req, res) {
    var params = req.body;
    SeriesList.find({ name: params.username, pass: params.pass }, { _id: 0, series: 0, __v: 0 }).exec((err, userLogged) => {
        if (err) {
            res.status(500).send({ accion: 'get user', error: 'Server Error 500' });
        } else if (!userLogged[0]) {
            res.status(404).send({ accion: 'get user', error: 'User 404' });
        } else if (!userLogged[0].active) {
            res.status(403).send({ accion: 'get user', error: 'User not confirmed' });
        } else {
            SeriesList.findOneAndUpdate({ name: params.username, pass: params.pass }, { $set: { lastDate: new Date() } }, { new: true },
                (err, user) => {
                    if (err) {
                        res
                            .status(500)
                            .send({ accion: 'get user', error: 'Server Error 500' });
                    } else {
                        res.status(200).send({ accion: 'get user', data: user });
                    }
                }
            );
        }
    });
}

function register(req, res) {
    var params = req.body;

    // creamos un objeto del modelo seriesList
    var seriesList = new SeriesList();

    // rellenamos el objeto
    seriesList.name = params.username;
    seriesList.email = params.email;
    seriesList.pass = params.pass;
    seriesList.confirmId = uniqid();
    seriesList.active = false;
    seriesList.creationDate = new Date();
    seriesList.lastDate = new Date();
    seriesList.imageUrl = 'https://via.placeholder.com/150x150';
    //No es necesario inicializar el parametro series, crea un array vacio automaticamente

    var mailOptions = {
        from: constants.email,
        to: seriesList.email,
        subject: 'MyWatchList Confirmation Email',
        text: 'Confirm Email: https://mywatchlist.xyz/confirmemail/' +
            seriesList.confirmId
    };

    // guardamos el user con las series vacias
    seriesList.save((err, userRegistered) => {
        if (err) {
            res.status(500).send({ accion: 'save user', error: 'Server Error 500' });
        } else {
            transporter.sendMail(mailOptions, function(error, info) {
                if (error) {
                    res.status(500).send({ accion: 'save user', error: error });
                } else {
                    res.status(200).send({
                        accion: 'save user',
                        data: 'userRegistered',
                        email: info.response
                    });
                }
            });
        }
    });
}

function rememberAuth(req, res) {
    var email = req.params.email;
    var newPass = Math.floor(Math.random() * 100000) + 'list';
    var passHashed = String(sha256.hash(newPass));
    SeriesList.find({ email: email }, { _id: 0, series: 0, __v: 0 }).exec(
        (err, user) => {
            if (err) {
                res.status(500).send({ accion: 'remember credentials', error: 'Server Error 500' });
            } else {
                var mailOptions = {
                    from: 'djdanypsn@gmail.com',
                    to: email,
                    subject: 'MyWatchList Remember Credentials',
                    text: 'Username: ' + user[0].name + '\nPassword: ' + newPass
                };

                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        res
                            .status(500)
                            .send({ accion: 'remember credentials', error: error });
                    } else {
                        res
                            .status(200)
                            .send({ accion: 'remember credentials', email: info.response });
                    }
                });
            }
        }
    );

    SeriesList.findOneAndUpdate({ email: email }, { $set: { pass: passHashed } }, { new: true },
        (err, user) => {
            if (err) {
                res
                    .status(500)
                    .send({ accion: 'update pass', error: 'Server Error 500' });
            } else {
                res.status(200).send({ accion: 'update pass', data: 'passChanged' });
            }
        }
    );
}

function confirmEmail(req, res) {
    var uniqId = req.params.uniqId;

    SeriesList.updateOne({ confirmId: uniqId }, { $set: { active: true } }).exec(
        (err, confirmed) => {
            if (err) {
                res
                    .status(500)
                    .send({ accion: 'confirm email', error: 'Server Error 500' });
            } else if (!confirmed) {
                res.status(404).send({ accion: 'confirm email', error: 'User 404' });
            } else {
                res.status(200).send({ accion: 'confirm email', data: "userConfirmed" });
            }
        }
    );
}

function changePass(req, res) {
    var params = req.body;

    SeriesList.findOneAndUpdate({ name: params.username, pass: params.pass }, { $set: { pass: params.newPass } }, { new: true },
        (err, passChanged) => {
            if (err) {
                res
                    .status(500)
                    .send({ accion: 'change password', error: 'Server Error 500' });
            } else if (passChanged === null) {
                res.status(404).send({ accion: 'change password', error: 'User 404' });
            } else {
                res
                    .status(200)
                    .send({ accion: 'change password', data: 'passChanged' });
            }
        }
    );
}

function changeImage(req, res) {
    var params = req.body;

    SeriesList.findOneAndUpdate({ name: params.username, pass: params.pass }, { $set: { imageUrl: params.imageUrl } }, { new: true },
        (err, passChanged) => {
            if (err) {
                res.status(500).send({ accion: 'change image', error: "Server Error" });
            } else {
                res.status(200).send({ accion: 'change image', data: 'imageChanged' });
            }
        }
    );
}

function deleteUser(req, res) {
    var params = req.body;

    SeriesList.findOneAndRemove({ name: params.username, pass: params.pass },
        (err, userDeleted) => {
            if (err) {
                res
                    .status(500)
                    .send({ accion: 'delete user', error: 'Server Error 500' });
            } else {
                res.status(200).send({ accion: 'delete user', data: "userDeleted" });
            }
        }
    );
}

module.exports = {
    findUser,
    sharedUser,
    login,
    register,
    rememberAuth,
    confirmEmail,
    deleteUser,
    changePass,
    changeImage
};