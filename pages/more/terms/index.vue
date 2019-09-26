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
    <h1>This is Terms page</h1>
  </el-row>
</template>

<script>
import SpacerItem from '../../../components/SpacerItem'
export default {
  head() {
    return {
      title: 'Swingo | Terms',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore Terms @Swingo'
        },
        {
          name: 'twitter:title',
          content: 'Swingo Terms'
        },
        {
          name: 'twitter:description',
          content: 'Explore Terms @Swingo'
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
  name: 'Terms',
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
