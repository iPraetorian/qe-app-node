import { Request, Response } from 'express';

export const Sample = {
  list: (req: Request, res: Response) => {
    res.status(200).json({ message: 'List' });
  },
  item: (req: Request, res: Response) => {
    res.status(200).json({ message: `Item: ${req.params.itemId}` });
  },
};
