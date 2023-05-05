const path = require('path');

module.exports = ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  const connections = {
    
    postgres: {
      connection: {
        connectionString: env('DATABASE_URL'),
        host: env('DATABASE_HOST', 'dpg-ch993imkobicv5svj3r0-a.singapore-postgres.render.com'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ecommerce_strapi_xvev'),
        user: env('DATABASE_USERNAME', 'ecommerce_strapi_xvev_user'),
        password: env('DATABASE_PASSWORD', 'iOdqcTXEYW6d1NYU1QDUDP66NMo48v2a'),
        ssl: env.bool('DATABASE_SSL', true),
        schema: env('DATABASE_SCHEMA', 'public'),
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
    },
   
  };

  return {
    connection: {
      client,
      ...connections[client],
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};
