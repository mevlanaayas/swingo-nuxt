import { Notification } from 'element-ui'

export default function({ $axios, redirect }) {
  $axios.onError((err) => {
    let offset = 60
    if (err.response.data.hasOwnProperty('detail')) {
      /* details comes when;
          failed login attempt,
          etc
       */
      Notification.error({
        title: 'Wrong username or password',
        message: err.response.data.detail,
        offset
      })
      offset += 60
    }
    if (err.response.data.hasOwnProperty('username')) {
      Notification.error({
        title: 'Username',
        message: err.response.data.username[0],
        offset
      })
      offset += 60
    }
    if (err.response.data.hasOwnProperty('email')) {
      Notification.error({
        title: 'Email',
        message: err.response.data.email[0],
        offset
      })
      offset += 60
    }
    if (err.response.data.hasOwnProperty('first_name')) {
      Notification.error({
        title: 'First Name',
        message: err.response.data.first_name[0],
        offset
      })
      offset += 60
    }
    if (err.response.data.hasOwnProperty('last_name')) {
      Notification.error({
        title: 'Last Name',
        message: err.response.data.last_name[0],
        offset
      })
      offset += 60
    }
    if (err.response.data.hasOwnProperty('password1')) {
      let message = '<ul>'
      const data = err.response.data.password1
      for (let i = 0; i < data.length; i++) {
        message += '<li>' + err.response.data.password1[i] + '</li>'
      }
      message += '</ul>'
      Notification.error({
        title: 'Password',
        dangerouslyUseHTMLString: true,
        message,
        offset
      })
      offset += 60
    }
    if (err.response.data.hasOwnProperty('new_password1')) {
      let message = '<ul>'
      const data = err.response.data.new_password1
      for (let i = 0; i < data.length; i++) {
        message += '<li>' + err.response.data.new_password1[i] + '</li>'
      }
      message += '</ul>'
      Notification.error({
        title: 'New Password',
        dangerouslyUseHTMLString: true,
        message,
        offset
      })
      offset += 60
    }
    if (Array.isArray(err.response.data)) {
      if (
        err.response.data[0].includes(
          'duplicate key value violates unique constraint'
        )
      ) {
        Notification.error({
          title: 'Match Creation',
          message: 'You already have a deal about this orders',
          offset
        })
      } else {
        Notification.error({
          title: 'Error',
          message: err.response.data[0],
          offset
        })
      }
      offset += 60
    }
    if (err.response.data.hasOwnProperty('phone_number')) {
      Notification.error({
        title: 'Phone Number',
        message: err.response.data.phone_number[0],
        offset
      })
      offset += 60
    }
  })
}
