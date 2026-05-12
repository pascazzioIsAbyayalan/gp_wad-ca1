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

addGame(id, game) {
    this.store.addItem(this.collection, id, this.array, game);
},

addPlaylist(playlist) {
  this.store.addCollection(this.collection, playlist);
},

removeGame(id, gameId) {
    this.store.removeItem(this.collection, id, this.array, gameId);
},

removePlaylist(id) {
    const playlist = this.store.findOneBy(this.collection, (p) => p.id === id);
    this.store.removeCollection(this.collection, playlist);
},

};

export default playlistStore;
