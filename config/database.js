// strapi-api/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-3-220-207-90.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd548tc8qv9ci2r'),
      user: env('DATABASE_USERNAME', 'wezbsdlncunegh'),
      password: env('DATABASE_PASSWORD', 'f09c805be7d2517c200b79afb3094b46abd92571c6ecb0090be09bb5c29de4a9'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
      },
    },
    debug: false,
  },
});