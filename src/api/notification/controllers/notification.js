'use strict';

/**
 * A set of functions called "actions" for `notification-pusher`
 */

// const { notify } = require('../../../../config/web-push');
const { createCoreController } = require('@strapi/strapi').factories;
module.exports = createCoreController('api::notification.notification', ({ strapi }) => ({
    async find(ctx) {
        const response = await super.find(ctx);
        return response;
    },
    async update(ctx) {
        const response = await super.update(ctx);
        return response;
    },
    async findOne(ctx) {
        const response = await super.findOne(ctx);
        return response;
    },
    async delete(ctx) {
        const response = await super.delete(ctx);
        // await notify(strapi, { message: 'Notification' });
        return response;
    },

    async create(ctx) {
        const response = await super.create(ctx);
        // await notify(strapi, {
        //     message: `A Notification ${response?.data?.attributes?.name} has been created`
        // });
        return response;
    }
}));