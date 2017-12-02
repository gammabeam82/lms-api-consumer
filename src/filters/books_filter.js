export default (books, condition, type) => {
  if (!condition.length) {
    return books
  }
  switch (type.toLowerCase()) {
    case 'books':
      return books.filter((book) => book.name.toLowerCase().includes(condition.toLowerCase()))
    case 'authors':
      return books.filter((book) => book.author.lastName.toLowerCase().includes(condition.toLowerCase()))
    case 'genres':
      return books.filter((book) => book.genre.name.toLowerCase().includes(condition.toLowerCase()))
  }
}
