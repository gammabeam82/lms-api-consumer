import axios from 'axios'
import store from '../store'
import { BASE_URL } from '../config'

export default (type, page = 1) => {
  const url = `${BASE_URL}/${type}?page=${page}`
  const params = {
    headers: {
      'Authorization': store.getters.getToken
    }
  }

  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}
