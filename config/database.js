// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-54-91-223-99.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd5o7c8l58po0jv'),
      user: env('DATABASE_USERNAME', 'uykrfnhsxkglvi'),
      password: env('DATABASE_PASSWORD', '9c41aba04f43f12b0986de453d3b428c5b40c2c38f736531bb68d413112eee8b'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});