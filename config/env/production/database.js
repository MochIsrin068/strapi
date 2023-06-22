module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("PGHOST", "127.0.0.1"),
      port: env.int("PGPORT", 5931),
      // database: env("PGDATABASE", "railway"),
      database: env("PGDATABASE", "strapi"),
      user: env("PGUSER", "postgres"),
      password: env("PGPASSWORD", "password"),
      ssl: env.bool(true),
    },
  },
});

// module.exports = ({ env }) => ({
//   connection: {
//     client: "postgres",
//     connection: {
//       host: env("PGHOST", "127.0.0.1"),
//       port: env.int("PGPORT", 5431),
//       database: env("PGDATABASE", "strapi"),
//       user: env("PGUSER", "strapi"),
//       password: env("PGPASSWORD", "password"),
//       ssl: env.bool(true),
//     },
//     pool: { min: 0 },
//   },
// });
