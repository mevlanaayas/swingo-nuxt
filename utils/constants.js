export default {
  SIZE_OPTIONS: [
    { key: 'XSMALL', value: 'Xsmall', eg: 'Pocket sized' },
    { key: 'SMALL', value: 'Small', eg: 'Shoulder sized' },
    { key: 'MEDIUM', value: 'Medium', eg: 'Back-pack sized' },
    { key: 'LARGE', value: 'Large', eg: 'Luggage sized' },
    { key: 'XLARGE', value: 'Xlarge', eg: 'Only God knows' }
  ],
  ORDER_TYPES: {
    SEND_ORDER: 'send',
    CARRY_ORDER: 'carry'
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
    'mobile-terms',
    'index'
  ],
  DEFAULT_HEADER_DISABLED_ROUTES: [
    'welcome',
    'orders-type',
    'orders-create-type',
    'send',
    'carry'
  ]
}
