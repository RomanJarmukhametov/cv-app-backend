'use strict';

/**
 * side-navigation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::side-navigation.side-navigation');
