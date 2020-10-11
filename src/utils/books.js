import {v4 as uuidv4} from 'uuid';
export const books = [
  {
    id: uuidv4(),
    number: 1,
    title: 'The Little Prince',
    author: 'Antoine de Saint-Exupéry',
    friend: 'Michael Jackson',
    until: '2020-09-16',
  },
  {
    id: uuidv4(),
    number: 2,
    title: 'Arch of Triumph',
    author: 'Erich Maria Remarque',
    friend: 'Sara Li',
    until: '2020-09-22',
  },
];