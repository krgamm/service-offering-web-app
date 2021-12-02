module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        filename: env("DATABASE_FILENAME", ".tmp/data.db"),
        client: "postgres",
        host: env("DATABASE_HOST"),
        port: env.int("DATABASE_PORT"),
        database: env("DATABASE_NAME"),
        username: env("DATABASE_USERNAME"),
        password: env("DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL"),
      },
      options: {},
    },
  },
});
