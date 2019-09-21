<template>
  <div>
    <el-row justify="center" style="text-align: center">
      <el-col :xs="24">
        <div v-if="!released">
          <h1><img src="../assets/logo.png" alt="swingo" /></h1>
          <h1 class="">
            Coming Soon!..
          </h1>
          <h3>
            Our mobile applications are getting ready for you. You will have
            access to Swingo both on Android and IOS
          </h3>
          <h4>
            For now you can use our web application with the same functionality.
            <nuxt-link style="color: #E6A23C" to="login"
              >Take me to Login page</nuxt-link
            >
          </h4>
        </div>
      </el-col>
      <el-form
        v-if="!released"
        ref="subscribeForm"
        :inline="true"
        :model="subscribeForm"
        class="demo-form-inline"
      >
        <el-form-item label="Email Address">
          <el-input
            v-model="subscribeForm.email"
            placeholder="Email address"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="warning" @click="subscribe">Stay in touch</el-button>
        </el-form-item>
      </el-form>
      <h1>
        <!--
        <countdown
          v-if="releaseDate !== null && !released"
          :time="calculatedTime"
          :emit-events="true"
          @end="countdownEnds"
        >
          <template slot-scope="props">
            <span class="counter-title">
              {{ props.days }} days, {{ props.hours }} hours,
              {{ props.minutes }} minutes, {{ props.seconds }} seconds
            </span>
          </template>
        </countdown>
        -->
        <span v-if="released">
          Download Swingo
        </span>
      </h1>
      <el-row v-if="released" type="flex">
        <el-col class="hidden-sm-and-down" :xs="24" :sm="4"> </el-col>
        <el-col :xs="24" :sm="16">
          <a :href="iosUrl" target="_blank"
            ><span style="font-size: 24px">Download for IOS</span></a
          >
          &nbsp;&nbsp;
          <spacer-item class="hidden-md-and-up" space="20" />
          <a :href="androidUrl" target="_blank"
            ><span style="font-size: 24px">Download for Android</span></a
          >
        </el-col>
        <el-col class="hidden-sm-and-down" :xs="24" :sm="4"> </el-col>
      </el-row>
      <spacer-item space="40" />
      <h4>You may want to follow us on social media</h4>
      <!--
            <a href="https://www.twitter.com" target="_blank">
                <i class="fab fa-twitter sw-icon" aria-hidden="true"></i>
            </a>
            -->
      <a href="https://www.instagram.com/goswingo" target="_blank">
        <i
          style="font-size: 35px"
          class="fab fa-instagram sw-icon"
          aria-hidden="true"
        ></i>
      </a>
    </el-row>
  </div>
</template>

<script>
import SpacerItem from '../components/SpacerItem'

export default {
  name: 'Download',
  components: { SpacerItem },
  data() {
    const validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the email'))
      } else {
        if (this.subscribeForm.email !== '') {
          this.$refs.subscribeForm.validateField('email')
        }
        callback()
      }
    }
    return {
      released: true,
      iosUrl: '',
      androidUrl: '',
      releaseDate: null,
      src: null,
      subscribeForm: {
        email: ''
      },
      subscribeFormRules: {
        email: [{ required: true, validator: validateEmail }]
      }
    }
  },
  computed: {
    calculatedTime() {
      const target = this.releaseDate
      const targetMM = new Date(target).getTime()
      const now = new Date()
      const nowMM = now.getTime()
      return targetMM - nowMM
    }
  },
  async asyncData(ctx) {
    return {
      orders: await ctx.app.$repository.Params()
    }
  },
  methods: {
    async subscribe() {
      await this.$repository.Subscribe({
        email: this.subscribeForm.email
      })
    },
    redirectSubscribed() {
      setTimeout(() => {
        this.$router.push({ name: 'subscribed' })
      }, 2000)
    },
    countdownEnds() {
      this.released = true
    }
  }
}
</script>

<style scoped>
.custom-sw-centered {
  transform: translateY(0%) !important;
}

img {
  max-height: 100px;
}
</style>
