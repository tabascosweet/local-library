function findAccountById(accounts, id) {
  let match = accounts.find((account) => account.id === id)
  return match
}

function sortAccountsByLastName(accounts) {
  let sorted = accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1)
  return sorted
}

function getTotalNumberOfBorrows(account, books) {
  return books.reduce((totalBorrows, book) => {
    const borrowCount = book.borrows.reduce((count, borrow) => {
      return count + (borrow.id === account.id ? 1 : 0)
    }, 0)
    return totalBorrows + borrowCount
  }, 0)
}

function getBooksPossessedByAccount(account, books, authors) {
  //initialize the booksAccountHas array
  let booksAccountHas = []
  //loop through the books array
  for (let i = 0; i < books.length; i++){
    //loop through the borrows array for each book
    for(let j = 0; j < books[i].borrows.length; j++){
      //check if the borrows id is equal to the account id AND the borrow retured value is equal to false
      if (books[i].borrows[j].id == account.id && books[i].borrows[j].returned == false){
        booksAccountHas.push(books[i])
      }
    }
  }
  // after the booksAccountHas array has been created, loop through it again
  for (let i = 0; i < booksAccountHas.length; i++){
    // loop through the authors
    for(let j = 0; j < authors.length; j++){
      // check if the booksAccountHas array item's author id is equal to the author id
      if(authors[j].id == booksAccountHas[i].authorId){
        booksAccountHas[i].author = authors[j]
      }
    }
  }
  return booksAccountHas
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
