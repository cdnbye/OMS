import Cookies from 'js-cookie'

const TokenKey = 'MyToken'
const IDKey = 'id'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token, { expires: 7 })
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getID() {
  return Cookies.get(IDKey)
}

export function setID(id) {
  return Cookies.set(IDKey, id, { expires: 7 })
}

export function removeID() {
  return Cookies.remove(IDKey)
}
