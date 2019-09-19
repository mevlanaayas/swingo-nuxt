const api = '/swingo/'

// AUTH
export const Login = api + 'auth/login/'
export const Logout = api + 'auth/logout/'
export const AuthUser = api + 'auth/user/'
export const User = api + 'client/'
export const Register = api + 'auth/registration/'
export const PasswordChange = api + 'auth/password/change/'
export const ForgotPassword = api + 'auth/password/reset'
export const ResetPassword = api + 'auth/password/reset/confirm/'

// EMAIL
export const ConfirmEmail = api + 'auth/email/confirm/'

// PHONE_NUMBER
export const PhoneNumber = api + 'phone_number/'

// OTHER
export const City = api + 'city/'

// ORDERS
export const TransceiverOrder = api + 'orders/send/'
export const TransporterOrder = api + 'orders/carry/'
export const MySendOrder = api + 'my_orders/send/'
export const MyCarryOrder = api + 'my_orders/carry/'

// CLIENTS
export const Client = api + 'client/'

export const ChatMessages = api + 'messages/'

export const Match = api + 'match/'

export const Subscribe = api + 'subscription/'

export const Params = api + 'sw_param/'
