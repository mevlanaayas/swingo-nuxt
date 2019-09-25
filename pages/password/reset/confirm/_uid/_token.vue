<template>
  <div>
    <el-row>
      <el-col :xs="24" :md="12">
        <div>
          <h1>
            Reset password
          </h1>
          <client-only>
            <el-alert
              title="Password Rules"
              type="warning"
              :closable="false"
              show-icon
            >
              <ul class="password-rules">
                <li>
                  It must contain at least 5 characters.
                </li>
                <li>
                  It must be alphanumeric and rare.
                  <a
                    href="https://gist.github.com/roycewilliams/281ce539915a947a23db17137d91aeb7"
                  >
                    Common passwords</a
                  >
                  are weak :(
                </li>
                <li>
                  It must be different from your username, email, first name and
                  last name.
                </li>
              </ul>
            </el-alert>
          </client-only>

          <spacer-item space="30"></spacer-item>

          <el-form
            ref="resetForm"
            :rules="resetRules"
            :model="resetForm"
            label-width="180px"
          >
            <el-form-item label="New Password" prop="password">
              <el-input
                v-model="resetForm.password"
                type="password"
                placeholder="Password"
              >
                <i slot="prefix" class="fas fa-lock el-input__icon"></i>
              </el-input>
            </el-form-item>

            <el-form-item label="New Password Confirm" prop="password2">
              <el-input
                v-model="resetForm.password2"
                type="password"
                placeholder="Re-enter Password"
              >
                <i slot="prefix" class="fas fa-lock el-input__icon"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="resetPassword"
                >Reset Password</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" class="hidden-sm-and-down">
        <div>
          <h1 class="h1tag register-quote" data-heading="No password is Secure">
            No password is Secure
          </h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SpacerItem from '@/components/SpacerItem'

export default {
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'ResetPassword',
  components: { SpacerItem },
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        if (this.resetForm.password2 !== '') {
          this.$refs.resetForm.validateField('password2')
        }
        callback()
      }
    }
    const validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.resetForm.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }
    return {
      uid: '',
      token: '',
      resetForm: {
        password: '',
        password2: ''
      },
      resetRules: {
        password: [{ required: true, validator: validatePass }],
        password2: [{ required: true, validator: validateRePass }]
      }
    }
  },
  mounted() {
    this.uid = this.$router.history.current.params.uid
    this.token = this.$router.history.current.params.token
  },
  methods: {
    resetPassword() {
      this.$refs.resetForm.validate((valid) => {
        if (valid) {
          this.$repository
            .ResetPassword({
              uid: this.uid,
              token: this.token,
              new_password1: this.resetForm.password,
              new_password2: this.resetForm.password2
            })
            .then((response) => {
              if (response) {
                this.$swal.fire({
                  allowOutsideClick: false,
                  showConfirmButton: false,
                  title: 'Succesfull!',
                  text: 'New password saved!',
                  type: 'success',
                  onOpen: this.redirectToLogin,
                  timer: 2000
                })
              }
            })
        } else {
          return false
        }
      })
    },
    redirectToLogin() {
      setTimeout(() => {
        this.$router.push({ name: 'login' })
      }, 2000)
    }
  }
}
</script>
