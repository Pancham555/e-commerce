'use strict';

/**
 * A set of functions called "actions" for `query`
 */

module.exports = {
  async getsearch(ctx, next) {
    try {
      const { query } = ctx.query
      const entries = await strapi.entityService.findMany('api::book.book', {
        filters: {
          $or: [{
            'heading': {
              $containsi: query
            }
          }, {
            'heading': {
              $startsWith: query
            },
          }, {
            'heading': {
              $endsWith: query
            },
          }
          ]
        },
        populate: {
          image: true,
          image_carousel: true
        }
      })
      ctx.body = entries
    }
    catch (error) {
      // console.log(error, 'Err');
      ctx.body = { error: error.toString() }
    }
  }
};