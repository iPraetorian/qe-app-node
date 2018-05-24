import { Router } from 'express';

import { HttpMethod } from '../enums/http-method';
import { SampleRoutes } from './sample';
import { ContactRoutes } from './contacts';
import { runInThisContext } from 'vm';

export class Routes {
  static Sample: Router;
  static Contacts: Router;

  static init(app: any, router: Router) {
    this.Sample = SampleRoutes.init();
    this.Contacts = ContactRoutes.init();

    // middleware to use for all requests
    router.use('/', (req, res, next) => {
      // ALLOWS
      res.header('Access-Control-Allow-Origin', '*');
      // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Amz-Date, X-Api-Key, X-Amz-Security-Token, Origin, X-Requested-With, X-Api-Url, Accept');
      res.header('Access-Control-Allow-Methods', Object.keys(HttpMethod).join(', '));

      // logging
      console.log('Requesting', req.method, req.originalUrl);

      // don't stop here, make sure we go to the next routes
      next();
    });

    // routes
    app.use(router);
    app.use(this.Sample);
    app.use(this.Contacts);

    return router;
  }
}
