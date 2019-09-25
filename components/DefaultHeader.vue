<template>
  <div v-show="!$auth.$state.loggedIn">
    <el-menu class="sw-nav-menu" mode="horizontal" @select="handleSelect">
      <el-menu-item class="sw-menu-item" index="index">
        <img src="../assets/logo.png" alt="logo" class="header-logo" />
        <span
          style="font-family: wigrumbold, sans-serif; padding-left: 5px; font-size: 17px; color: black"
          >Swingo</span
        >
      </el-menu-item>
      <el-menu-item
        v-if="!$auth.$state.loggedIn"
        class="sw-menu-item"
        index="login"
        style="float: right"
      >
        <el-button type="primary" class="">JOIN US</el-button>
      </el-menu-item>
      <el-menu-item
        v-if="$auth.$state.loggedIn"
        class="sw-menu-item"
        index="welcome"
        style="float: right"
      >
        <el-button type="primary" class="">GO TO APP</el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import CONSTANTS from '../utils/constants'

export default {
  name: 'Header',
  data() {
    return {
      disabled: CONSTANTS.DEFAULT_HEADER_DISABLED_ROUTES
    }
  },
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key })
    }
  }
}
</script>

<style scoped>
.sw-nav-menu {
  border-bottom: none;
}

.sw-menu-item {
  cursor: pointer;
  border-bottom: none !important;
}
@media screen {
}
</style>
