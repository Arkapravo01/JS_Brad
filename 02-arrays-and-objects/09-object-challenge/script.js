// Step 1
const library = [
  {
    title: 'Percy Jackson',
    author: 'Rick Riordan',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Brothers Karamazov',
    author: 'Fyodor Dostoevsky',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
const book1 = library[0];
book1.status.read = true;

const book2 = library[1];
book2.status.read = true;

const book3 = library[2];
book3.status.read = true;

// Step 3
const { title: firstBook } = library[0];

// Step 4
const libraryJSON = JSON.stringify(library);

console.log(libraryJSON);
