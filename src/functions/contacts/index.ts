import { Request, Response } from 'express';

const contacts = [
    {id: 1, title: 'Climber', name: 'Royal Robbins', tel: '000-000-0000', bio: 'Long time climber and Yosemite aficionado', image: 'assets/images/rRobins.jpg'},
    {id: 2, title: 'Climber', name: 'Jim Bridwell', tel: '000-000-0000', bio: 'Another crazy climber', image: 'assets/images/jBridwell.jpg'},
    {id: 3, title: 'Climber', name: 'Dale Bard', tel: '000-000-0000', bio: 'Crazy climber', image: 'assets/images/dBard.jpg'},
    {id: 4, title: 'MotoGP Racer', name: 'Nicky Hayden', tel: '000-000-0000', bio: 'Absurdly good racer', image: 'assets/images/nHayden.jpg'},
    {id: 5, title: 'MotoGP Racer', name: 'Max Biaggi', tel: '000-000-0000', bio: 'One of my favorite Aprilia racers', image: 'assets/images/mBiaggi.jpg'},
    {id: 6, title: 'MotoGP Racer', name: 'Marco Simoncelli', tel: '000-000-0000', bio: 'Talented rider that lost his life much too soon.', image: 'assets/images/mSimoncelli.jpg'},
    {id: 7, title: 'Painter', name: 'Kara Walker', tel: '000-000-0000', bio: 'Prolific African American painter', image: 'assets/images/kWalker.jpg'},
    {id: 8, title: 'Painter', name: 'Jean-Michael Basquiat', tel: '000-000-0000', bio: 'Provacative African American Painter', image: 'assets/images/jmBasquiat.jpg'},
    {id: 9, title: 'Writer', name: 'Jack Kerouac', tel: '000-000-0000', bio: 'Beatnik, author, traveler', image: 'assets/images/jKerouac.jpg'},
    {id: 10, title: 'Writer', name: 'Richard Wright',tel: '000-000-0000', bio: 'Author of two of my most prized books', image: 'assets/images/rWright.jpg'}
];    

export const Contacts = {
  list: (req: Request, res: Response) => {
    res.status(200).json(contacts);
  },
  item: (req: Request, res: Response) => {
    const contact = contacts.find(c => c.id == req.params.contactId);

    res.status(200).json(contact);
  },
};
