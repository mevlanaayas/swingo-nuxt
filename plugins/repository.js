import createRepository from '../api/repository'

export default (ctx, inject) => {
  inject('repository', createRepository(ctx.$axios))
}
