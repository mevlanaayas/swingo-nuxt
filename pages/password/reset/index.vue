<template>
  <div>
    <el-row>
      <el-col :xs="24" :md="24" class="outer-register-container">
        <div class="inner-register-container">
          <h1>
            Reset password
          </h1>
          <h4>
            Enter your email address below and we'll email instructions for
            setting up a new ones
          </h4>

          <el-form
            ref="forgotPasswordForm"
            :rules="forgotPasswordRules"
            :model="forgotPasswordForm"
            label-width="120px"
            label-position="top"
          >
            <el-form-item
              class="sw-form-item"
              label="Email Address"
              prop="email"
            >
              <el-input
                v-model="forgotPasswordForm.email"
                placeholder="Email address"
              >
                <i slot="prefix" class="fas fa-at el-input__icon"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button
                class="submit-btn"
                type="primary"
                @click="sendConfirmation"
                >Submit
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'ForgotPassword',
  data() {
    const validateEmail = (rule, value, callback) => {
      // eslint-disable-next-line
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (value === '') {
        callback(new Error('Please input the email'))
      } else if (!re.test(value)) {
        callback(new Error('Please input a valid email'))
      } else {
        callback()
      }
    }
    return {
      forgotPasswordForm: {
        email: ''
      },
      forgotPasswordRules: {
        email: [{ required: true, validator: validateEmail }]
      }
    }
  },
  methods: {
    sendConfirmation() {
      this.$refs.forgotPasswordForm.validate((valid) => {
        if (valid) {
          this.$repository
            .ForgotPassword({ email: this.forgotPasswordForm.email })
            .then((response) => {
              // eslint-disable-next-line
              if (response) {
                this.$swal.fire({
                  allowOutsideClick: false,
                  showConfirmButton: false,
                  title: 'Succesfull!',
                  text: '',
                  type: 'success',
                  onOpen: this.redirectResetMailSent,
                  timer: 2000
                })
              }
            })
        } else {
          return false
        }
      })
    },
    redirectResetMailSent() {
      setTimeout(() => {
        this.$router.push({ name: 'password-reset-sent' })
      }, 2000)
    }
  }
}
</script>

<style scoped>
.outer-register-container {
  text-align: center;
}

.inner-register-container {
  display: inline-block;
}

.sw-form-item {
  text-align: start;
}

.submit-btn {
  min-width: 40%;
  max-width: 55%;
}

@media only screen and (min-width: 668px) and (max-width: 991px),
  (min-width: 1250px) {
  .inner-register-container {
    width: 25%;
  }
}

@media only screen and (max-width: 666px),
  (min-width: 992px) and (max-width: 1250px) {
  .inner-register-container {
    width: 80%;
  }
}
</style>
