import axios from 'axios'

const http = axios.create({
  baseURL: 'https://breakingbadapi.com/api',
})

export default http