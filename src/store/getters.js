export default {
  getToken: state => state.token,
  getUserName: state => {
    return state.user.username
  },
  getBooks: state => state.books
}
