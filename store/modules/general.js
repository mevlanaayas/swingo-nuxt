const state = {
  isCollapse: false,
  register: {
    step: 1,
    username: '',
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password2: ''
  },
  login: {
    username: ''
  },
  resetPassword: {
    email: ''
  },
  addressFrom: '',
  addressTo: ''
}

const getters = {
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

const actions = {
  Collapse({ commit }) {
    commit('collapse')
  }
}

const mutations = {
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

export default {
  state,
  getters,
  actions,
  mutations
}
