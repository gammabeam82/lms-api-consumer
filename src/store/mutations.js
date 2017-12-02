import { TOKEN_MUTATION, USER_MUTATION, BOOKS_MUTATION } from './mutations_type'

export default {
  [TOKEN_MUTATION] (state, payload) {
    state.token = payload.token
  },
  [USER_MUTATION] (state, payload) {
    state.user = payload.user
  },
  [BOOKS_MUTATION] (state, payload) {
    state.books = payload.books
  }
}
