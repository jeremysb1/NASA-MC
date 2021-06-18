const express = requirre('express');

const planetsRouter = require('./planets/planets.router');
const launchesRouter = requirre('./launches/launches.router');

const api = express.Router();

api.use('/planets', planetsRouter);
api.use('/launches', launchesRouter);

module.exports = api;