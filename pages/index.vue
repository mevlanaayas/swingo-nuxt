<template>
  <div class="container">
    <div>
      <logo />
      <h4 class="title">
        Bana Hatırlat
      </h4>
      <h6 class="subtitle">
        Hatırlatan uygulama
      </h6>
      <div class="reminder-form">
        <el-form
          ref="reminderForm"
          :model="reminderForm"
          :rules="reminderFormRules"
        >
          <el-form-item label="Topic" prop="topic">
            <el-input v-model="reminderForm.topic"> </el-input>
          </el-form-item>

          <el-form-item label="Detail">
            <el-input
              v-model="reminderForm.detail"
              type="textarea"
              :autosize="{ minRows: 3, maxRows: 7 }"
            ></el-input>
          </el-form-item>

          <el-form-item label="Notification Type">
            <el-radio-group v-model="reminderForm.notificationType">
              <el-radio-button label="Email"></el-radio-button>
              <el-radio-button label="SMS"></el-radio-button>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="Phone Number" prop="phoneNumber">
            <el-input v-model="reminderForm.phoneNumber"> </el-input>
          </el-form-item>

          <el-form-item label="Email address" prop="email">
            <el-input v-model="reminderForm.email"> </el-input>
          </el-form-item>

          <el-form-item label="When to notify" prop="when">
            <el-date-picker v-model="reminderForm.when"></el-date-picker>
          </el-form-item>

          <el-form-item>
            <el-button class="block-btn" type="danger">
              Remind me
            </el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :key="post.id"
          :to="{ name: 'posts-id', params: { id: post.id } }"
          class="button--grey"
        >
          {{ post.title }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import {
  validateEmail,
  validatePhoneNumber,
  validateTopic,
  validateWhen
} from '../static/validators.js'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      reminderForm: {
        topic: '',
        detail: '',
        notificationType: false,
        phoneNumber: '',
        email: '',
        when: new Date()
      },
      reminderFormRules: {
        topic: [{ required: true, validator: validateTopic }],
        phoneNumber: [{ required: true, validator: validatePhoneNumber }],
        email: [{ required: true, validator: validateEmail }],
        when: [{ required: true, validator: validateWhen }]
      }
    }
  },
  computed: {
    posts() {
      return this.$store.state.posts.all
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
