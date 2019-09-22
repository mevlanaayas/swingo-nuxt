<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :xs="24" class="outer-register-container">
        <div class="inner-register-container">
          <h2>
            We have sent you an email
          </h2>
          <h4>
            Thanks. Your request has been received. We've sent you an email with
            instructions for the password reset process but it may take a few
            moments to arrive in your inbox.
          </h4>
          <spacer-item space="40"></spacer-item>

          <h3>
            Still having troubles?
          </h3>
          <h5>
            Contact support at
            <a
              style="color:#E6A23C;"
              :href="`mailto:support@goswingo.com`"
              target="_blank"
              >support@goswingo.com</a
            >
            and we’ll help.
          </h5>

          <h1>
            <el-button type="primary" @click="letMeGoHome"
              >Go to homepage</el-button
            >
          </h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SpacerItem from '../../../components/SpacerItem'

export default {
  auth: false,
  name: 'ResetPasswordSent',
  components: { SpacerItem },
  methods: {
    letMeGoHome() {
      setTimeout(() => {
        this.$router.push({ name: 'index' })
      }, 200)
    }
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
    width: 50%;
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

h3,
h5 {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
