export default ({ app }) => {
  // Every time the route changes (fired on initialization too)
  app.router.beforeEach((to, from, next) => {
    // do something to validate
    // eslint-disable-next-line no-console
    console.log(to)
    // eslint-disable-next-line no-console
    console.log('\n')
    // eslint-disable-next-line no-console
    console.log('\n')
    // eslint-disable-next-line no-console
    console.log(from)
    // eslint-disable-next-line no-console
    console.log('\n')
    // eslint-disable-next-line no-console
    console.log('\n')
    // eslint-disable-next-line no-console
    console.log(app.store.$auth.$state.loggedIn)
    next()
  })
}
