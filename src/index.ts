import * as server from './server';
async function initialize() {
  try {
    console.info('Initializing: app server...');
    await server.start();
  } catch (err: any) {
    console.error(err);
    console.error(`Initializing Error: app server could not start, error='${err}'`);
  }
}
  
void initialize();
