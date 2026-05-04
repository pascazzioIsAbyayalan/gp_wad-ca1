//import logger from "../utils/logger.js";

'use strict';

import logger from "../utils/logger.js";
import card from "../models/card.js";

const about = {
  createView(request, response) {
    logger.info("About page loading!");

    const employeesData = card.getAppInfo();
    const employees = Array.isArray(employeesData) ? employeesData : [];
    // Hi! The array would just not work so I had to include
    // this safety check. Don't know how it works exactly but it does.
    const viewData = {
      title: "About the Playlist App",
      employees
    };

    response.render('about', viewData);  

  },
};

export default about;
