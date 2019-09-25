<template>
  <div></div>
</template>

<script>
export default {
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'ConfirmEmail',
  created() {
    const confirmationId = this.$router.history.current.params.id
    this.$repository
      .ConfirmEmail({ params: { id: confirmationId } })
      .then((response) => {
        this.loading = false
        if (response) {
          this.$swal.fire({
            allowOutsideClick: false,
            showConfirmButton: false,
            title: 'Confirmed!',
            text: 'Wait a second! You are redirecting to login page..',
            type: 'success',
            onOpen: this.alertOpened,
            timer: 3000
          })
        }
      })
      .catch((e) => {
        if (e) {
          this.$swal.fire({
            allowOutsideClick: false,
            showConfirmButton: false,
            title: 'Failed to Confirm!',
            text: 'Wait a second! You are redirecting to resend page..',
            type: 'error',
            onOpen: this.alertOpenedError,
            timer: 3500
          })
        }
      })
  },
  methods: {
    alertOpened() {
      setTimeout(() => {
        this.$router.push({ name: 'login' })
      }, 3000)
    },
    alertOpenedError() {
      setTimeout(() => {
        this.$router.push({ name: 'resend' })
      }, 3000)
    }
  }
}
</script>
