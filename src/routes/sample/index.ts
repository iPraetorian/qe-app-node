import * as express from 'express';
import { Request, Response, Router } from 'express';
import { Sample } from '../../functions/sample';

const router = express.Router();

export const SampleRoutes = {
  init: (): Router => {
    router.route('/sample/list').get(Sample.list);
    router.route('/sample/:itemId').get(Sample.item);

    return router;
  },
};
