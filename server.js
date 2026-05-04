'use strict';

import express from 'express';
import routes from './routes.js'; 
import logger from "./utils/logger.js";
import { create } from 'express-handlebars';



const app = express();
const port = 3000;

app.use(express.static("public"));

const handlebars = create({extname: '.hbs'});
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

/* // Define routes
app.get('/', (request, response) => response.send('Welcome to the Playlist app!'));
// app.get('/dashboard', (request, response) => response.send('Playlist App Dashboard'));
app.get("/dashboard", (request, response) => {
  const playlist = [
    {
      id: 1,
      title: "Piano Sonata No. 3",
      artist: "Beethoven"
    },
    {
      id: 2,
      title: "Piano Sonata No. 7",
      artist: "Beethoven"
    },
    {
      id: 3,
      title: "Piano Sonata No. 10",
      artist: "Beethoven"
    }
  ];
  response.json(playlist);
});

// Error message
app.get('/error', (request, response) => response.status(404).end('Page not found.')); */

// In liu of app.get (s)
app.use("/", routes);

// app.listen(port, () => console.log(`Express app running on port ${port}!`));
app.listen(port, () => logger.info(`Your app is listening on port ${port}!`));
