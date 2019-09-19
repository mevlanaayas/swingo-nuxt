import * as resource from './resources'

export default ($axios) => ({
  index() {
    return $axios.$get('/posts')
  },

  create(payload) {
    return $axios.$post(`/posts`, payload)
  },

  show(id) {
    return $axios.$get(`/posts/${id}`)
  },

  update(payload, id) {
    return $axios.$put(`/posts/${id}`, payload)
  },

  delete(id) {
    return $axios.$delete(`/posts/${id}`)
  },

  // AUTH
  Login(options) {
    return $axios.$post(resource.Login, { ...options })
  },
  Register(options) {
    return $axios.$post(resource.Register, { ...options })
  },
  AuthUser(options) {
    return $axios.$get(resource.AuthUser, { ...options })
  },
  ForgotPassword(options) {
    return $axios.$post(resource.ForgotPassword, { ...options })
  },
  ResetPassword(options) {
    return $axios.$post(
      resource.ResetPassword + options.uid + '/' + options.token + '/',
      { ...options }
    )
  },

  // PROFILE
  ListPhoneNumbers(options) {
    return $axios.$get(resource.PhoneNumber, { ...options })
  },
  AddPhoneNumber(options) {
    return $axios.$post(resource.PhoneNumber, { ...options })
  },
  ConfirmPhoneNumber(options, id) {
    return $axios.$get(resource.PhoneNumber + id + '/confirm/', { ...options })
  },
  SetPrimary(options) {
    return $axios.$get(resource.PhoneNumber + options.id + '/set_primary/', {
      ...options
    })
  },
  Client(options) {
    return $axios.$get(resource.Client, { ...options })
  },
  MySendOrders(options) {
    return $axios.$get(resource.MySendOrder, { ...options })
  },
  MyCarryOrders(options) {
    return $axios.$get(resource.MyCarryOrder, { ...options })
  },
  Match(options) {
    return $axios.$get(resource.Match, { ...options })
  },

  // ORDERS
  CreateTransceiverOrder(options) {
    return $axios.$post(resource.TransceiverOrder, { ...options })
  },
  ListTransceiverOrders(options) {
    return $axios.$get(resource.TransceiverOrder, { ...options })
  },
  CreateTransporterOrder(options) {
    return $axios.$post(resource.TransporterOrder, { ...options })
  },
  ListTransporterOrders(options) {
    return $axios.$get(resource.TransporterOrder, { ...options })
  },

  // MATCH
  ListChatMessages(options) {
    return $axios.$get(resource.ChatMessages + options.params.id + '/')
  },
  RetrieveMatch(options) {
    return $axios.$get(resource.Match + options.params.id + '/')
  },
  CreateMatch(options) {
    return $axios.$post(resource.Match, { ...options })
  },
  AcceptMatch(options) {
    return $axios.$get(resource.Match + options.params.id + '/accept')
  },
  RejectMatch(options) {
    return $axios.$get(resource.Match + options.params.id + '/reject')
  },
  PassPayment(options) {
    return $axios.$get(resource.Match + options.params.id + '/pass_payment/')
  },
  BoxIsOk(options) {
    return $axios.$get(resource.Match + options.params.id + '/check_box_done/')
  },
  LetMeTakeBox(options) {
    return $axios.$get(
      resource.Match + options.params.id + '/ready_for_taking_box/'
    )
  },
  WeAreOk(options) {
    return $axios.$get(
      resource.Match + options.params.id + '/confirm_taking_code/',
      { ...options }
    )
  },
  LetMeDeliver(options) {
    return $axios.$get(
      resource.Match + options.params.id + '/ready_for_delivering_box/'
    )
  },
  IHaveACode(options) {
    return $axios.$get(
      resource.Match + options.params.id + '/confirm_delivery_code/',
      { ...options }
    )
  },
  RateCarrier(options) {
    return $axios.$get(resource.Match + options.params.id + '/rate_carrier/', {
      ...options
    })
  },
  RateSender(options) {
    return $axios.$get(resource.Match + options.params.id + '/rate_sender/', {
      ...options
    })
  },

  // OTHERS
  Subscribe(options) {
    return $axios.$post(resource.Subscribe, { ...options })
  },
  Params(options) {
    return $axios.$get(resource.Params, { ...options })
  },
  City(options) {
    return $axios.$get(resource.City, { ...options })
  },
  ConfirmEmail(options) {
    return $axios.$get(resource.ConfirmEmail + options.params.id + '/')
  }
})
