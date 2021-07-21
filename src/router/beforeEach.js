import store from '../store'

export default async (to, from, next) => {
  document.title = `${to.name} - Pentagro`

  if (to.name !== 'login' && !store.getters['auth/hasToken']) {
    try {
      await store.dispatch('auth/CheckToken')

      next({ name: to.name })
    } catch (err) {
      next({ name: 'login' })
    }
  } else {
    if (to.name === 'login' && store.getters['auth/hasToken']) {
      next({ name: 'Dashboard' })
    } else {
      next()
    }
  }
}
