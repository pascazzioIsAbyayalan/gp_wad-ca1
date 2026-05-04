'use strict';

import { v4 as uuidv4 } from 'uuid';
import logger from '../utils/logger.js';
import playlistStore from '../models/playlist-store.js';

const playlist = {
  createView(request, response) {
    const gameId = request.params.id;
    logger.debug(`Game id = ${gameId}`);
    
    const viewData = {
      title: 'Game',
      singleGame: playlistStore.getGames(gameId)
    };

    response.render('playlist', viewData);
  },

  addGame(request, response) {
    const gameId = request.params.id;
    const newGame = {
      id: uuidv4(),
      title: request.body.title,
      developer: request.body.developer,
    };
    playlistStore.addGame(gameId, newGame);
    response.redirect('/playlist/' + gameId);
},
};

export default playlist;
