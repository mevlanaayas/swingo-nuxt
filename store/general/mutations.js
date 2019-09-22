export default {
  collapse(state) {
    state.isCollapse = !state.isCollapse
  },
  updateRegisterUsername(state, username) {
    state.register.username = username
  },
  updateRegisterFirstname(state, firstName) {
    state.register.first_name = firstName
  },
  updateRegisterLastname(state, lastName) {
    state.register.last_name = lastName
  },
  updateRegisterEmail(state, email) {
    state.register.email = email
  },
  nextPage(state) {
    state.register.step++
  },
  prevPage(state) {
    state.register.step--
  },
  updateLoginUsername(state, username) {
    state.login.username = username
  },
  updateResetPasswordEmail(state, email) {
    state.resetPassword.email = email
  },
  setAddressFrom(state, address) {
    state.addressFrom = address
  },
  setAddressTo(state, address) {
    state.addressTo = address
  }
}
