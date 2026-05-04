/*'use strict';

import logger from '../utils/logger.js';

const playlist = {
  createView(request, response) {
    const viewData = {
      title: 'Playlist'
    };
    response.render('playlist', viewData);
  },
};

export default playlist;*/

/*'use strict';

import logger from '../utils/logger.js';

const playlist = {
  createView(request, response) {
    // Extracting and logging id
    const playlistId = request.params.id;
    logger.debug(`Playlist id = ${playlistId}`);
    
    const viewData = {
      title: 'Playlist'
    };
    response.render('playlist', viewData);
  },
};

export default playlist;*/

'use strict';

import logger from '../utils/logger.js';
import playlistStore from '../models/playlist-store.js';

const playlist = {
  createView(request, response) {
    const playlistId = request.params.id;
    logger.debug(`Playlist id = ${playlistId}`);
    
    const viewData = {
      title: 'Playlist',
      singlePlaylist: playlistStore.getPlaylist(playlistId)
    };

    response.render('playlist', viewData);
  },
};

export default playlist;
