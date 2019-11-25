exports.configure = function(env) {
  return configs[env];
}

let configs = {
  "development": {
    "username": "root",
    "password": `${process.env.DB_PASSWORD}`,
    "database": "feedme_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": `${process.env.DB_PASSWORD}`,
    "database": "feedme",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": `${process.env.DB_PASSWORD}`,
    "database": "feedme_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": "false",
    "use_env_variable":"JAWSDB_URL"
  }
}

