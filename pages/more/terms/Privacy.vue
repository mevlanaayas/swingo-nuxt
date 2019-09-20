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
    <h1>Swingo Privacy and Cookie Policy</h1>
    <p>Last updated: 14 September 2019</p>
    <p>
      Swingo (" We", "Our", "Us") is committed to protecting and respecting your
      privacy.
    </p>
  </el-row>
</template>

<script>
import SpacerItem from '../../../components/SpacerItem'
export default {
  auth: false,
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
