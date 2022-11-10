// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// strapi - api / config / database.js
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", process.env.DB_HOST_NAME),
      port: env.int("DATABASE_PORT", process.env.DB_PORT),
      database: env("DATABASE_NAME", process.env.DB_NAME),
      user: env("DATABASE_USER", process.env.DB_USERNAME),
      password: env("DATABASE_PASSWORD", process.env.DB_PASSWORD),
      // schema: env("DATABASE_SCHEMA", process.env.DB_CONNECTION),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false),
      },
    },
  },
});
