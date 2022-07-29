import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-deva.herokuapp.com/'
})

export default api