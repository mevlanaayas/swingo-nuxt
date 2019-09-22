<template>
  <div>
    <el-row>
      <transition enter-active-class="animated fadeIn">
        <el-col :key="step" :xs="24" :md="24" class="outer-register-container">
          <div class="inner-register-container">
            <div v-show="step === 1">
              <h5>
                <i class="fas fa-battery-empty el-input__icon"></i> Step 1 of 3
              </h5>

              <h1>
                Create an account
              </h1>
            </div>

            <div v-show="step === 2">
              <h5>
                <i class="fas fa-battery-half el-input__icon"></i> Step 2 of 3
              </h5>

              <h1>
                What should we call you?
              </h1>
            </div>

            <div v-show="step === 3">
              <h5>
                <i class="fas fa-battery-full el-input__icon"></i> Step 3 of 3
              </h5>

              <h1>
                Choose a password
              </h1>
            </div>

            <el-form
              ref="passForm"
              :rules="passRules"
              :model="passForm"
              label-width="150px"
              label-position="top"
            >
              <div v-show="step === 1">
                <el-form-item
                  class="sw-form-item"
                  label="Username"
                  prop="username"
                >
                  <el-input v-model="passForm.username" placeholder="Username">
                    <i slot="prefix" class="fas fa-user el-input__icon"></i>
                  </el-input>
                </el-form-item>

                <el-form-item class="sw-form-item" label="Email" prop="email">
                  <el-input
                    v-model="passForm.email"
                    placeholder="Email address"
                    type="email"
                  >
                    <i slot="prefix" class="fas fa-at el-input__icon"></i>
                  </el-input>
                </el-form-item>
              </div>

              <div v-show="step === 2">
                <el-form-item
                  class="sw-form-item"
                  label="First name"
                  prop="firstName"
                >
                  <el-input v-model="passForm.firstName" placeholder="Mevlana">
                    <i slot="prefix" class="fas fa-dice-one el-input__icon"></i>
                  </el-input>
                </el-form-item>

                <el-form-item
                  class="sw-form-item"
                  label="Last name"
                  prop="lastName"
                >
                  <el-input v-model="passForm.lastName" placeholder="Ayas">
                    <i slot="prefix" class="fas fa-dice-six el-input__icon"></i>
                  </el-input>
                </el-form-item>
              </div>

              <div v-show="step === 3">
                <el-form-item
                  class="sw-form-item"
                  label="Password"
                  prop="password"
                >
                  <el-input
                    v-model="passForm.password"
                    type="password"
                    placeholder="********"
                  >
                    <i slot="prefix" class="fas fa-lock el-input__icon"></i>
                  </el-input>
                </el-form-item>
                <el-form-item
                  class="sw-form-item"
                  label="Confirm Password"
                  prop="password2"
                >
                  <el-input
                    v-model="passForm.password2"
                    type="password"
                    placeholder="********"
                  >
                    <i slot="prefix" class="fas fa-lock el-input__icon"></i>
                  </el-input>
                </el-form-item>
              </div>

              <spacer-item space="40"></spacer-item>

              <div v-show="step === 3" class="term-notify">
                <span>
                  By clicking "Create account" below, you agree to Swingo's
                  Terms and acknowledge that you have read the
                  <nuxt-link
                    class="terms-link"
                    :to="{ name: 'more-terms-customer' }"
                    target="_blank"
                  >
                    Swingo User Agreement.
                  </nuxt-link>
                </span>
              </div>

              <spacer-item space="20"></spacer-item>

              <el-form-item>
                <el-button
                  class="flow-btn"
                  :disabled="step === 1"
                  @click="prevPage"
                  >Back</el-button
                >
                <el-button
                  v-show="step < 3"
                  class="flow-btn"
                  type="primary"
                  @click="nextPage"
                  >Next
                </el-button>
                <el-button
                  v-show="step === 3"
                  class="register-btn"
                  type="primary"
                  @click="submitForm"
                >
                  Create account
                </el-button>
              </el-form-item>

              <spacer-item space="75"></spacer-item>
            </el-form>
            <h4>
              Do you already have a Swingo account?
              <nuxt-link style="color: #E6A23C" to="login">Log In</nuxt-link>
            </h4>

            <client-only>
              <el-alert
                v-show="step === 3"
                title="Password Rules"
                type="info"
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
                      style="color: black"
                      href="https://gist.github.com/roycewilliams/281ce539915a947a23db17137d91aeb7"
                      target="_blank"
                    >
                      Common passwords</a
                    >
                    are weak :(
                  </li>
                  <li>
                    It must be different from your username, email, first name
                    and last name.
                  </li>
                </ul>
              </el-alert>
            </client-only>
          </div>
        </el-col>
      </transition>
    </el-row>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
import SpacerItem from '../components/SpacerItem'

export default {
  auth: false,
  name: 'Register',
  components: {
    SpacerItem
  },
  data() {
    const validateAccept = (rule, value, callback) => {
      if (value === false) {
        callback(new Error('Please accept the terms'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'))
      } else {
        callback()
      }
    }
    const validateRePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'))
      } else if (value !== this.passForm.password) {
        callback(new Error("Two inputs don't match!"))
      } else {
        callback()
      }
    }
    const validateUsername = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the username'))
      }
      if (value.length < 3) {
        callback(new Error('Username must be at least 3 characters long'))
      } else {
        callback()
      }
    }
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
    const validateFirstName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the first name'))
      } else {
        callback()
      }
    }
    const validateLastName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the last name'))
      } else {
        callback()
      }
    }
    return {
      passForm: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        password2: '',
        accept: false
      },
      passRules: {
        username: [{ required: true, validator: validateUsername }],
        email: [{ required: true, validator: validateEmail }],
        firstName: [{ required: true, validator: validateFirstName }],
        lastName: [{ required: true, validator: validateLastName }],
        password: [{ required: true, validator: validatePass }],
        password2: [{ required: true, validator: validateRePass }],
        accept: [{ required: true, validator: validateAccept }]
      }
    }
  },
  computed: mapGetters({
    step: 'general/registerStep'
  }),
  methods: {
    /*
    nextPage() {
      this.$refs.passForm.validate((valid) => {
        // eslint-disable-next-line no-console
        console.log(valid)
        if (valid) {
          // eslint-disable-next-line no-console
          console.log('geliy')
          this.$store.commit('general/nextPage')
        } else {
          return false
        }
      })
    },
   */
    register() {
      this.$repository
        .Register({
          username: this.passForm.username,
          password1: this.passForm.password,
          password2: this.passForm.password2,
          email: this.passForm.email,
          first_name: this.passForm.firstName,
          last_name: this.passForm.lastName
        })
        .then((response) => {
          if (response) {
            this.$router.push('login')
          }
        })
    },
    submitForm() {
      this.$refs.passForm.validate((valid) => {
        if (valid) {
          this.register()
        } else {
          return false
        }
      })
    },
    ...mapMutations({
      prevPage: 'general/prevPage',
      nextPage: 'general/nextPage'
    })
  }
}
</script>

<style scoped>
.h1tag {
  margin-top: -7%;
}
.outer-register-container {
  text-align: center;
}

.inner-register-container {
  display: inline-block;
}

.sw-form-item {
  text-align: start;
}

.register-btn {
  max-width: 55%;
}

.flow-btn {
  max-width: 30%;
  min-width: 25%;
}

.info-font-style {
  font-weight: 100;
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

.term-notify {
  text-align: start;
}

.password-rules {
  text-align: start;
}
</style>
