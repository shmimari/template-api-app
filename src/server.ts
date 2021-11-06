import { initialize } from './app';

import * as db from './persistence';

let server: any;

export const start = async function () {
  //initialize DB
  try {
    await db.init();
  } catch (e) {
    console.error('An error occurred while attempting to init DB handlers.', e);
    throw e;
  }


  const app = initialize();
  const { PORT = 3000 } = process.env;
  server = app.listen(PORT, function () {
    console.info(`Scheduler API service started on port ${PORT}`);
  });
};

export const stop =() => {
  try {
    db.shutdown();
    if (server) {
      server.close();
    }
  } catch (e) {
    console.error('Caught error in DB stop routine.', e);
    //otherwise ignore because server is being destroyed
  }
};

