import Vue from 'vue'
import moment from 'moment'

Vue.filter('format_date', function(date) {
  if (!date) return ''
  return moment(date, 'YYYY-MM-DD HH:mm Z').format('DD.MM.YYYY')
})
Vue.filter('format_time', function(date) {
  if (!date) return ''
  return moment(date, 'YYYY-MM-DD HH:mm Z').format('HH:mm ')
})
Vue.filter('vuetify_to_backend', function(date) {
  if (!date) return ''
  return moment(date, 'YYYY-MM-DD').format()
})
Vue.filter('format_datetime', function(date) {
  if (!date) return ''
  return moment(date, 'YYYY-MM-DD HH:mm Z').format('DD.MM.YYYY HH:mm ')
})

Vue.filter('moment_to_date', function(date) {
  if (!date) return ''
  return moment(date).format('DD.MM.YYYY HH:mm:ss ')
})

Vue.filter('upper_first_lower_others', function(size) {
  if (!size) return ''
  return (
    size.slice(0, 1).toUpperCase() + size.slice(1, size.length).toLowerCase()
  )
})

Vue.filter('upper_all', function(value) {
  if (!value) return ''
  return value.toUpperCase()
})
