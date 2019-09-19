<template>
  <div class="container">
    <div>
      <logo />
      <h4 class="title">
        Nuxt + Vue
      </h4>
      <div class="reminder-form">
        <el-button class="block-btn" type="danger" @click="login">
          Login
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  auth: false,
  components: {
    Logo
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return [{ id: 1, title: '', content: '' }]
    }
  },
  methods: {
    login() {
      this.$auth.loginWith('local', {
        data: {
          username: 'mev',
          password: 'aassddFF'
        }
      })
    }
  },
  head() {
    return {
      title: 'Home Page 🍕',
      meta: [
        {
          name: 'twitter:title',
          content: 'Swingo website written by using Nuxt'
        },
        { name: 'twitter:description', content: 'Swingo + Nuxt = SEO' },
        {
          name: 'twitter:image',
          content:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTa7p9dP3luG09tHmTWk8WqqZ-LCuUt2H3y9veP5FAAYbkrMRk'
        }
      ]
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 50px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 36px;
  color: #526488;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}
.reminder-form {
  padding-top: 15px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
}
.block-btn {
  width: 100%;
}
</style>
