'use strict';

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
};

export default playlist;
