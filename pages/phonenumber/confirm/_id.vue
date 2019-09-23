<template>
  <div>
    <spacer-item space="40"></spacer-item>
    <el-row class="sw-centered-hr" type="flex" justify="center">
      <el-col :xs="22" :md="16" :lg="16">
        <el-card shadow="hover" class="sw-phone-confirmation-card">
          <h3>We sent a confirmation code to {{ phoneNumber }}.</h3>
          <el-form ref="codeForm" :rules="codeRules" :model="codeForm">
            <h5>Confirmation Code</h5>
            <el-form-item prop="code">
              <el-input
                v-model="codeForm.code"
                type="text"
                maxlength="6"
                show-word-limit
              ></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="checkForm">Confirm</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SpacerItem from '@/components/SpacerItem'

export default {
  name: 'ConfirmPhoneNumber',
  components: { SpacerItem },
  props: {
    phoneNumberId: {
      type: Number,
      default: 0
    },
    phoneNumber: {
      type: String,
      default: ''
    }
  },
  data() {
    const validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the code'))
      } else {
        callback()
      }
    }
    return {
      codeForm: {
        code: ''
      },
      codeRules: {
        code: [{ required: true, validator: validateCode }]
      }
    }
  },
  created() {
    if (this.phoneNumberId === undefined) {
      this.$router.go(-1)
    }
  },
  methods: {
    confirmPhoneNumber() {
      this.$repository
        .ConfirmPhoneNumber(
          { params: { code: this.codeForm.code } },
          this.phoneNumberId
        )
        .then((response) => {
          this.loading = false
          if (response.data.isSuccessful) {
            this.$swal.fire({
              allowOutsideClick: false,
              showConfirmButton: false,
              title: 'Confirmed!',
              text: 'Wait a second! You are redirecting to login page..',
              type: 'success',
              onOpen: this.alertOpened,
              timer: 3000
            })
          } else {
            this.$swal.fire({
              allowOutsideClick: false,
              showConfirmButton: false,
              title: 'Failed to Confirm!',
              text: response.data.msg,
              type: 'error',
              onOpen: this.alertOpenedError,
              timer: 3500
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
    checkForm() {
      this.$refs.codeForm.validate((valid) => {
        if (valid) {
          this.confirmPhoneNumber()
        } else {
          return false
        }
      })
    },
    alertOpened() {
      setTimeout(() => {
        this.$router.push({ name: 'profile' })
      }, 3000)
    },
    alertOpenedError() {
      setTimeout(() => {
        this.$router.push({ name: 'profile' })
      }, 3000)
    }
  }
}
</script>

<style scoped>
.input-width {
  width: 30% !important;
}
</style>
