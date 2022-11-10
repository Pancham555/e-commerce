'use strict';

/**
 *  order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const rzp = require('razorpay')
const instance = new rzp({
    key_id: process.env.RZP_KEY,
    key_secret: process.env.RZP_SECRET,
})
// module.exports = createCoreController('api::order.order')
module.exports = createCoreController('api::order.order', ({ strapi }) => ({
    async create(ctx) {
        const {
            amount,
            address,
            city,
            email,
        } = ctx.request.body.data;
        const options = {
            amount: amount * 100,  // amount in the smallest currency unit i.e. paisa
            currency: "INR",
            receipt: email
        };
        try {
            const product = await instance.orders.create(options);
            const entity = await strapi.service('api::order.order')
                .create({
                    data: {
                        amount, address, product, city, email
                    }
                })
            const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
            return await this.transformResponse(sanitizedEntity)

        } catch (error) {
            ctx.response.status = 500;
            return { error: { message: 'There was a problem creating the charge' } };
        }
    },
    async find(ctx) {
        // some custom logic here
        ctx.query = { ...ctx.query, local: 'en' };
        // Calling the default core action
        const { data, meta } = await super.find(ctx);

        // some more custom logic
        meta.date = Date.now();

        return { data, meta };
    },
    async findOne(ctx) {
        const { id } = ctx.params;
        const { query } = ctx;

        const entity = await strapi.service('api::restaurant.restaurant').findOne(id, query);
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

        return this.transformResponse(sanitizedEntity);
    },
}))
