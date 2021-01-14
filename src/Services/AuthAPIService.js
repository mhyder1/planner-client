import config from "../Config/Config";
import TokenService from './TokenService'

const AuthAPIService = {
  postUser(user) {
    return fetch(`${config.REACT_APP_API_BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body:JSON.stringify(user),
    })
    .then(res => 
      (!res.ok) 
         ? res.json().then(e => Promise.reject(e))
         : res.json()
    )
    .then(res => 
      (!res.ok) 
      ? res.json().then(e => Promise.reject(e))
      : res.json()
    )
}, 
postLogin({email, password}) {
  return fetch(`${config.REACT_APP_API_BASE_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(res => 
      (!res.ok) 
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
      .then( res => {
        TokenService.saveAuthToken(res.authToken)
        TokenService.queueCallbackBeforeExpiry(() => {
          AuthAPIService.postRefreshToken() 
        })
        return res

      })
},
postRefreshToken() {
  return fetch(`${config.REACT_APP_API_BASE_URL}/auth/refresh`, {
    method: 'POST',
    headers: {
      'authorization': `Bearer ${TokenService.getAuthToken()}`,
    },
  }).then(res => 
    (!res.ok) 
    ? res.json().then(e => Promise.reject(e))
    : res.json()
    ).then(res => {
      TokenService.saveAuthToken(res.authToken)
      TokenService.queueCallbackBeforeExpiry(() => {
        AuthAPIService.postRefreshToken()
      })
      return res
    })
    .catch(err => {
      console.error(err)
    })
  },
}

export default AuthAPIService
