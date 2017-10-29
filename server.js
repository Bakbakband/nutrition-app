// Simple NodeJS Server for SSR
'use strict';

require('zone.js/dist/zone-node'); // Change detection node-based for angular
require('reflect-metadata'); // To handle metadata on server

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine'); // Rendering engine for express

// requires server side code to load and handle all the module code
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

// Loader for Server App Module & Identifier map to see which modules are lazy loaded
// Created by compilation step
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist-server/main.bundle');

function angularRouter(req, res) {
    res.render('index.html', {req, res});
}

const app = express();

// Register render engine
app.engine('html', ngUniversal.ngExpressEngine({
    bootstrap: AppServerModuleNgFactory,
    providers: [
        provideModuleMap(LAZY_MODULE_MAP)
    ]
}));
app.set('view engine', 'html');
app.set('views', 'dist');

// Routing
app.get('/', angularRouter);
app.use(express.static(`${__dirname}/dist`)); // for static files
app.get('*', angularRouter);

app.listen(3000, () => {
    console.log('Listening on port 3000');
});
