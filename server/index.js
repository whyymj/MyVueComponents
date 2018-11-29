"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 3000;
const indexRoutes = require('./routes/UI/index');
const userRoutes = require('./routes/UI/users');
app.set('port', port);
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        // Init Nuxt.js
        const nuxt = new Nuxt(config);
        // Build only in dev mode
        if (config.dev) {
            const builder = new Builder(nuxt);
            yield builder.build();
        }
        // Give nuxt middleware to express
        app.use('/UIindex', indexRoutes);
        app.use('/UIusers', userRoutes);
        app.get('/test', (req, res, next) => {
            res.send('wwww');
            next();
        });
        app.use(nuxt.render);
        // Listen the server
        app.listen(port, host);
        consola.ready({ message: `Server listening on http://${host}:${port}`, badge: true });
    });
}
start();
//# sourceMappingURL=index.js.map