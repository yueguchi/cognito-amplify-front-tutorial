import axios from 'axios'

// API系は自分のAPI使ってね。このAPIはアクセス制限かかっているので他の人は使えません
const API_BASE_URL = 'https://milaadw0od.execute-api.ap-northeast-1.amazonaws.com/'
const API_ENV = 'stg'

export async function getTest() {
  return axios.get(`${API_BASE_URL}${API_ENV}/test`)
}
