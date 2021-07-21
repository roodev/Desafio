import services from '@/http'

export const UnitList = () => {
  return services.user.getUnitList().then(res => {
    return res.data
  })
}

export const SendUser = ({ dispatch }, payload) => {
  return services.user.postUser(payload).then(res => {
    return res.data
  })
}