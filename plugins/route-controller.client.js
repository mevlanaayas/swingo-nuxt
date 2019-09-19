export default ({ app }) => {
  if (process.env.NODE_ENV !== 'production') return

  const isAuthenticated = true

  app.router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth === 1)) {
      if (isAuthenticated) {
        next()
      } else {
        app.router.push({ name: 'login', query: { redirect: to.name } })
      }
    } else if (to.matched.some((record) => record.meta.requiresAuth === 0)) {
      if (isAuthenticated) {
        app.router.push({ name: 'welcome' })
      } else {
        next()
      }
    } else {
      next()
    }
  })
}
