import mongoose from 'mongoose';

const init = async () => {

  const url = 'mongodb://localhost:27017/schedulerApi';
  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  try {
    await mongoose.connect(url, options);
    console.log('Mongo/DocumentDB connection created');
    mongoose.connection.on('error', (err: any) => {
      console.error('mongoose error');
      console.log(err);
    });
    mongoose.connection.on('connected', () => {
      console.info('MONGOOSE CONNECTED');
    });
    mongoose.connection.on('disconnected', () => {
      console.info('MONGOOSE DISCONNECTED');
    });
    mongoose.connection.on('reconnected', () => {
      console.info('MONGOOSE RECONNECTED');
    });
  } catch (e) {
    console.error('mongoose initial connection error', e);
    throw e;
  }
};

const shutdown = async () => {
  try {
    await mongoose.disconnect();
  } catch (e) {
    console.error('An error occurred attempting to disconnect from db.', e);
    throw e;
  }
};
export { init, shutdown };