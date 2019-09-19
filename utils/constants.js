export default {
  USER_STATE: {
    NOT_NECESSARY: 0,
    LOGGED_OUT: 1,
    LOGGED_IN: 2
  },
  SIZE_OPTIONS: [
    { key: 'XSMALL', value: 'Xsmall', eg: 'Pocket sized' },
    { key: 'SMALL', value: 'Small', eg: 'Shoulder sized' },
    { key: 'MEDIUM', value: 'Medium', eg: 'Back-pack sized' },
    { key: 'LARGE', value: 'Large', eg: 'Luggage sized' },
    { key: 'XLARGE', value: 'Xlarge', eg: 'Only God knows' }
  ],
  ORDER_TYPES: {
    TRANSCEIVER_ORDER: 1,
    TRANSPORTER_ORDER: 2
  },
  TITLES: [{ key: 'Mr', value: 'Mr' }, { key: 'Mrs', value: 'Mrs' }],
  HEADER_DISABLED_ROUTES: [
    'login',
    'register',
    'main',
    'forgot-password',
    'confirm-email',
    'reset-password',
    'home',
    'mobile-terms'
  ]
}
