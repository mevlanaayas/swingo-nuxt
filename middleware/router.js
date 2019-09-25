export default ({ store, route, redirect }) => {
  const authority = route.meta[0].auth.authority
  const auth = store.$auth.$state.loggedIn

  if (authority === 2) {
    // continue
  } else if (authority === 1) {
    // auth required
    if (auth) {
      // continue
    } else {
      return redirect('/login')
    }
  } else {
    // un auth required
    // eslint-disable-next-line no-lonely-if
    if (auth) {
      return redirect('/welcome')
    } else {
      // continue
    }
  }
}
