import axios from 'axios'
import { axiosConfig } from '../../config'

// axios instance
const instance = axios.create({
  baseURL: axiosConfig.url,
  timeout: axiosConfig.timeout,
  headers: {},
})

export const api = instance
