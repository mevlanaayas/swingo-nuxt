<template>
  <div>
    <el-row type="flex" justify="center" class="sw-centered">
      <el-col :xs="24">
        <div>
          <h1 class="">
            Subscribed
          </h1>
          <h3>
            We will send you an information when Swingo mobile is fully
            available.
          </h3>
          <h1>
            <el-button type="warning" @click="letMeLogin"
              >Take me to Login page</el-button
            >
          </h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  auth: false,
  name: 'Subscribed',
  methods: {
    letMeLogin() {
      setTimeout(() => {
        this.$router.push({ name: 'login' })
      }, 200)
    }
  }
}
</script>

<style scoped></style>
