function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id)
  return found
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id)
  return found
}

function partitionBooksByBorrowedStatus(books) {
  let finalArray = []
  let returnedBooks = books.filter((book) => book.borrows[0].returned === true)
  let checkedOutBooks = books.filter((book) => book.borrows[0].returned === false)
  finalArray.push(checkedOutBooks)
  finalArray.push(returnedBooks)
  return finalArray
}

function getBorrowersForBook(book, accounts) {
  let finalArray = []
  let {borrows} = book
  for (let i = 0; i < borrows.length && finalArray.length < 10; i++){
    let borrow = borrows[i]
    const foundAccount = accounts.find((account) => account.id === borrow.id)
    if (foundAccount){
      finalArray.push({...foundAccount, returned: borrow.returned})
    }
  }
  return finalArray
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
