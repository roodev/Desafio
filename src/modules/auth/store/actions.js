import services from '@/http'
import { Promise } from 'core-js'
import * as storage from '../storage'
import * as types from './mutation-types'

export const Login = ({ dispatch }, payload) => {
  return services.auth.login(payload).then(res => {
    dispatch('SetToken', res.body.replaceAll('"', ''))
  })
}

export const CheckToken = ({ dispatch, state }) => {
  if (state.token) {
    return Promise.resolve(state.token)
  }

  const token = storage.getLocalToken()

  if (!token) {
    return Promise.reject(new Error('Token Inválido'))
  }

  dispatch('SetToken', token)
}

export const SetToken = ({ commit }, payload) => {
  storage.setLocalToken(payload)
  storage.setHeaderToken(payload)
  commit(types.SET_TOKEN, payload)
}

export const SignOut = ({ dispatch }) => {
  storage.setHeaderToken('')
  storage.deleteLocalToken()
  dispatch('SetToken', '')
}
