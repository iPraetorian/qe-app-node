import * as express from 'express';
import { Request, Response, Router } from 'express';
import { Contacts } from '../../functions/contacts';

const router = express.Router();

export const ContactRoutes = {
  init: (): Router => {
    router.route('/contacts').get(Contacts.list);
    router.route('/contacts/:contactId').get(Contacts.item);

    return router;
  },
};
