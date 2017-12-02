import axios from 'axios'
import { BASE_URL } from '../config'

const tokenUrl = `${BASE_URL}/login_check`

export default data => {
  return new Promise((resolve, reject) => {
    axios.post(tokenUrl, data)
      .then(response => resolve(response))
      .catch(error => reject(error))
  })
}
