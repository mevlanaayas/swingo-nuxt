<template>
  <el-row class="sw-centered-hr">
    <spacer-item space="20"></spacer-item>
    <span
      v-for="bet in ['terms', 'privacy', 'customer', 'guarantee']"
      :key="bet"
      class="index"
      @click="go(bet)"
      >{{ bet }}</span
    >
    <h1>The Swingo Guarantee</h1>
    <p>Last updated: 14 September 2019</p>
  </el-row> </template
>s

<script>
import SpacerItem from '../../../components/SpacerItem'
export default {
  head() {
    return {
      title: 'Swingo | Guarantee',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore Swingo guarantee details'
        },
        {
          name: 'twitter:title',
          content: 'Swingo Guarantee'
        },
        {
          name: 'twitter:description',
          content: 'Explore Swingo guarantee details'
        },
        {
          name: 'twitter:image',
          content:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTa7p9dP3luG09tHmTWk8WqqZ-LCuUt2H3y9veP5FAAYbkrMRk'
        }
      ]
    }
  },
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'Privacy',
  components: { SpacerItem },
  methods: {
    go(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style scoped>
.index {
  font-size: 20px;
  padding: 10px;
  margin-bottom: 5px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
