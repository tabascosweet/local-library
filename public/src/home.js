function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedArray = []
  for (i = 0; i < books.length; i++){
    if (books[i].borrows[0].returned == false){
      borrowedArray.push(books[i])
    }
  }
  return borrowedArray.length
}

function createGenreArray(books){
  let genreArray = []
  for(let i = 0; i < books.length; i++){
    const found = genreArray.some(genre => genre.name === books[i].genre)
    if(!found){
      genreArray.push({name: books[i].genre, count: 0})
    }
  }
  return genreArray
}

function getMostCommonGenres(books) {
  let genreArray = createGenreArray(books)
  for(let i = 0; i < books.length; i++){
    for(let j = 0; j < genreArray.length; j++) {
      if(books[i].genre == genreArray[j].name){
        genreArray[j].count += 1
      }
    }
  }
  let highestCounts = genreArray.sort((a,b) => {
    return a.count > b.count ? -1:1
  });
  let highestFive = highestCounts.slice(0, 5)
  return highestFive
}

function createBookArray(books){
  let bookArray = []
  for(let i = 0; i < books.length; i++){
    const found = bookArray.some(book => book.name === books[i].title)
    if(!found){
      bookArray.push({name: books[i].title, count: 0})
    }
  }
  return bookArray
}

const books = require('../data/books.js')
console.log(getMostPopularBooks(books))

function getMostPopularBooks(books) {
  let bookArray = createBookArray(books)
  for(let i = 0; i < books.length; i++){
    bookArray.map((book) => {
      if (books[i].title == book.name){
        return book.count = books[i].borrows.length
      }
    })
  }
  let highestCounts = bookArray.sort((a,b) => {
    return a.count > b.count ? -1:1
  });
  let highestFive = highestCounts.slice(0, 5)
  return highestFive
}

function createAuthorArray(authors){
  let authorArray = []
  for(let i = 0; i < authors.length; i++){
    const found = authorArray.some(author => author.name === authors[i].name)
    if(!found){
      authorArray.push({name: authors[i].name.first + " " + authors[i].name.last, count: 0})
    }
  }
  return authorArray
}

function getMostPopularAuthors(books, authors) {
  let authorArray = createAuthorArray(authors)
  for(let i = 0; i < authors.length; i++){
    for(let j = 0; j < authorArray.length; j++) {
      if(authors[i].name.first + " " + authors[i].name.last == authorArray[j].name){
        authorArray[j].count = books[i].borrows.length
      }
    }
  }
  let highestCounts = authorArray.sort((a,b) => {
    return a.count > b.count ? -1:1
  });
  let highestFive = highestCounts.slice(0, 5)
  return highestFive
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
