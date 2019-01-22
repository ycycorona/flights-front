import request from '@/utils/request'
import { md5 } from 'md5js'

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      identifier: username,
      token: md5(password, 32)
    }
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}
