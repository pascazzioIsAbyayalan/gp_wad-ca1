'use strict';

import logger from '../utils/logger.js';
import JsonStore from './json-store.js';

const playlistStore = {

  store: new JsonStore('./models/playlist-store.json', { gamesCollection: [] }),
  collection: 'gamesCollection',
  array: 'games',

  getAllGames() {
    return this.store.findAll(this.collection);
  },

  getGames(id) {
    return this.store.findOneBy(this.collection, (game => game.id === id));
},

};

export default playlistStore;
