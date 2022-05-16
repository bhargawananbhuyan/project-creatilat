import axios from 'axios'

export const url = 'https://creatilat.azurewebsites.net'

export const apiService = axios.create({ baseURL: 'https://creatilat.azurewebsites.net/api' })
