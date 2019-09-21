<template>
  <div>
    <el-row>
      <el-col :xs="24" :md="12" class="hidden-sm-and-down">
        <div>
          <img src="../assets/welcome.png" class="welcome-img" alt="welcome" />
        </div>
      </el-col>
      <el-col :xs="24" :md="12" class="outer-login-container">
        <div class="inner-login-container">
          <h1>
            Welcome back!
          </h1>
          <h4>
            Login to access senders, carriers and more.
          </h4>

          <el-form
            ref="loginForm"
            :rules="loginRules"
            :model="loginForm"
            label-width="120px"
            label-position="top"
          >
            <el-form-item class="sw-form-item" label="Username" prop="username">
              <el-input v-model="loginForm.username" placeholder="Username">
                <i slot="prefix" class="fas fa-user el-input__icon"></i>
              </el-input>
            </el-form-item>

            <spacer-item space="10"></spacer-item>

            <el-form-item class="sw-form-item" label="Password" prop="password">
              <el-input
                v-model="loginForm.password"
                type="password"
                placeholder="********"
              >
                <i slot="prefix" class="fas fa-lock el-input__icon"></i>
              </el-input>
            </el-form-item>

            <el-form-item>
              <el-button class="login-btn" type="primary" @click="login"
                >Login</el-button
              >
            </el-form-item>
          </el-form>
          <h4 class="info-font-style">
            Forgot password?
            <nuxt-link style="color:#E6A23C;" to="/forgot-password"
              >Recover password</nuxt-link
            >
          </h4>
          <h4 class="info-font-style">
            Don't have an account yet?
            <nuxt-link style="color: #E6A23C" to="register"
              >Sign up here.</nuxt-link
            >
          </h4>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SpacerItem from '../components/SpacerItem'

export default {
  auth: false,
  name: 'Login',
  components: {
    SpacerItem
  },
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        rememberMe: false
      },
      loginRules: {
        username: [
          { required: true, message: 'Username field can not be blank' }
        ],
        password: [
          { required: true, message: 'Password field can not be blank' }
        ]
      }
    }
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          const { username, password } = this.loginForm
          return this.$auth.loginWith('local', {
            data: {
              username,
              password
            }
          })
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
.outer-login-container {
  text-align: center;
}

.inner-login-container {
  display: inline-block;
}

.sw-form-item {
  text-align: start;
}

.login-btn {
  width: 40%;
}

.info-font-style {
  font-weight: 100;
}

@media only screen and (min-width: 668px) and (max-width: 991px),
  (min-width: 1250px) {
  .inner-login-container {
    width: 50%;
  }
}

@media only screen and (max-width: 666px),
  (min-width: 992px) and (max-width: 1250px) {
  .inner-login-container {
    width: 80%;
  }
}

.welcome-img {
  width: 80%;
  height: auto;
}
</style>
