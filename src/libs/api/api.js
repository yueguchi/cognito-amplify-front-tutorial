import axios from 'axios'

// API系は自分のAPI使ってね。このAPIはアクセス制限かかっているので他の人は使えません
const API_BASE_URL = 'https://milaadw0od.execute-api.ap-northeast-1.amazonaws.com/'
const API_ENV = 'stg'

const apiClient = axios.create({
  baseURL: API_BASE_URL
})

apiClient.interceptors.request.use(async config => {
  config.headers['Authorization'] = localStorage.getItem(
    'CognitoIdentityServiceProvider.4enc6qmrc2isf2phv5hoag17t.eguchi.idToken'
  )
  return config
})

export async function getTest() {
  return apiClient.get(`${API_BASE_URL}${API_ENV}/test`)
}
