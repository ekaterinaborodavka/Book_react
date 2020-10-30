import {v4 as uuidv4} from 'uuid';

export const newItem = (data, books) => {
  let num = books.length+1;
  return {
    id: uuidv4(),
    number: num++,
    ...data,
  };
};

export const addNewItem = (data, books) => {
  const { title, author, friend, until } = data;
  if (title&&author&&friend&&until !== '') {
    return [...books, newItem(data, books)];
  } else {
    alert('All fields must be filled in');
    return books;
  }
};

export const removeItem = (id, books) => {
  const newBooks = books.filter((el) => el.id !== id);
  let num = 1;
  newBooks.forEach((el) => {
    el.number = num;
    num++;
  });
  return newBooks;
};

export const changeBook = (books, newBook, id) => {
  const idx = books.findIndex((el) => el.id === id);
  const item = books[idx];
  Object.keys(newBook).forEach((key) => {
    if (newBook[key] === '') {
      delete newBook[key];
    }
    return newBook;
  });
  return [
    ...books.slice(0, idx),
    {
      ...item,
      ...newBook,
    },
    ...books.slice(idx+1),
  ];
};

export const modalValue = (books, id) => {
  return books.filter((el) => el.id === id);
};

export const getTotal = (books) => {
  return books.length;
};
