module.exports = ({ env }) => ({
  url: "https://strapi-ecommerce-mla2.onrender.com",
  host: env('HOST', process.env.HOST || '0.0.0.0'),
  port: env.int('PORT', process.env.PORT || 1337),
  admin: {
    secret: env('422254f72325139010a2626fa9934eff')
  },
});
