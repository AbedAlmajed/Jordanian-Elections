module.exports = {
  development: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",

      password: "Abed@0782744028",
      database: "election6",
    },
  },
  production: {
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",

      password: "Abed@0782744028",
      database: "election6",
    },
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};


//123456