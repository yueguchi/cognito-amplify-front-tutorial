import { Auth, API } from 'aws-amplify'

const API_NAME = 'cognito-tutorial-api'

export async function getTest() {
  const user = await Auth.currentAuthenticatedUser()
  const token = user.signInUserSession.idToken.jwtToken
  return API.get(API_NAME, '/stg/test', {
    headers: {
      Authorization: token
    }
  })
}
