module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '422254f72325139010a2626fa9934eff'),
  },
});
