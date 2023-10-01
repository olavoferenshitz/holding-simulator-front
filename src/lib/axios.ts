import axios from 'axios'

export const serverApi = axios.create({
  baseURL: 'https://holding-simulator-server.vercel.app',
})

export const googleSheetsEndpoint =
  'https://script.googleusercontent.com/macros/echo?user_content_key=1dMeJ9Xdpnn2OxtSIImMxFPr_iF0Nl-b9FpPS3eQ1fCT9AGVM9w4hBGDoS8kr3N4OP5C2czH8YV5BzsD1ZuV1iptCwwcopXlm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKK6-uAYwnfC5TB9dlq_DShQWV38amHX9GcE2L4R-OCvvd32pPjzNjFmtE7zxT6rIDy-8zbrlm9nFc_KqrDZdBQlBoHUyqzulQ&lib=MCrq-EJWv4RozjKmUTCvWm4xUbCXvGgRQ'
