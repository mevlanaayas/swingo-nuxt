export default {
  isCollapsed: (state) => {
    return state.isCollapse
  },
  loginUsername: (state) => {
    return state.login.username
  },
  registerStep: (state) => {
    return state.register.step
  },
  registerUsername: (state) => {
    return state.register.username
  },
  registerFirstname: (state) => {
    return state.register.first_name
  },
  registerLastname: (state) => {
    return state.register.last_name
  },
  registerEmail: (state) => {
    return state.register.email
  },
  addressFrom: (state) => {
    return state.addressFrom
  },
  addressTo: (state) => {
    return state.addressTo
  }
}
