import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as compression from 'compression';
import * as errorHandler from 'errorhandler';
import * as https from 'https';
import * as fs from 'fs-p';

import { Routes } from './routes/index';
import { OutputHelper } from './helpers/output-helper';

const app = express();

// REGISTER THE ROUTES
const router = express.Router(),
      routes = Routes.init(app, router);

app.use(routes);
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorHandler({ log: true }));

// set the port
const port = process.env.port || 4444,
      sslOptions = {
        key: fs.readFileSync('./cert/key.pem'),
        cert: fs.readFileSync('./cert/cert.pem'),
      };

// START THE SERVER
https.createServer(sslOptions, app).listen(port, () => {
  console.info(`api listening on https://localhost:${port}`);

  const env = process.env.stage || app.get('env');
  console.info('Environment:', env);
  if (env === 'dev') {
    for (const prop in Routes) {
      OutputHelper.routeTable(Routes[prop].stack);
    }
  }
});

module.exports = app;
