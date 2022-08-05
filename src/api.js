import axios from 'axios'

const api = axios.create({
  baseURL: 'https://blog-devs-api.herokuapp.com/'
})

export default api