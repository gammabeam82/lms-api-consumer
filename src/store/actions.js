import { TOKEN_MUTATION, USER_MUTATION, BOOKS_MUTATION } from './mutations_type'

export default {
  setToken (context, token) {
    context.commit(TOKEN_MUTATION, { 'token': token })
  },
  setUser (context, user) {
    context.commit(USER_MUTATION, { 'user': user })
  },
  setBooks (context, books) {
    context.commit(BOOKS_MUTATION, { 'books': books })
  }
}
