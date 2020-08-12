const { connect } = require('mongoose');

let database = process.env.DB_DEV_URI;

if (process.env.NODE_ENV === 'production') database = process.env.DB_PROD_URI;

const databaseConnection = async (DB = database) => {
  await connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};

module.exports = databaseConnection;
