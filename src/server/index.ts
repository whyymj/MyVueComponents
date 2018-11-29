const express = require('express')
const consola = require('consola')
const {Nuxt, Builder} = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const indexRoutes = require('./routes/UI/index');
const userRoutes = require('./routes/UI/users');
app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use('/UIindex', indexRoutes);
  app.use('/UIusers', userRoutes);
  app.get('/test', (req : any, res : any, next : any) => {
    res.send('wwww');
    
    next();
  })
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({message: `Server listening on http://${host}:${port}`, badge: true})
}
start()
