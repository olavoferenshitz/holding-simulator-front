import axios from 'axios'

export const serverApi = axios.create({
  baseURL: 'https://holding-simulator-server.vercel.app',
})
