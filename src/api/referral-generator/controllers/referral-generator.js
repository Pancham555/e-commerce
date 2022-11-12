'use strict';

/**
 * A set of functions called "actions" for `referral-generator`
 */

module.exports = {
  async referral(ctx, next) {
    try {
      const { query } = ctx.query
      const entries = await strapi.entityService.findMany('api::referral.referral', {
        filters: {
          $or: [{
            'referral_id': {
              $containsi: query
            }
          }, {
            'referral_id': {
              $startsWith: query
            },
          }, {
            'referral_id': {
              $endsWith: query
            },
          }
          ]
        },
        populate: {
          user: {
            fields: ['username', 'email']
          }
        }
      })
      ctx.body = entries
    } catch (error) {
      ctx.body = { error: error.toString() }
    }
  }
};
