<template>
  <div v-if="!disabled.includes(this.$route.name)">
    <el-menu
      :default-active="activeIndex"
      class="sw-nav-menu hidden-sm-and-down"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="index">
        <img src="../assets/logo.png" alt="logo" class="header-logo" />
        <span
          style="font-family: wigrumbold, sans-serif; padding-left: 5px; font-size: 17px; color: black"
          >Swingo</span
        >
      </el-menu-item>

      <el-menu-item v-if="$auth.$state.loggedIn" index="send">
        <i class="el-icon-timer"></i>
        <span class="sw-menu-p">Send</span>
      </el-menu-item>
      <el-menu-item v-if="$auth.$state.loggedIn" index="carry">
        <i class="el-icon-shopping-cart-full"></i>
        <span class="sw-menu-p">Carry</span>
      </el-menu-item>
      <el-menu-item index="senders">
        <i class="el-icon-tickets"></i>
        <span class="sw-menu-p">Senders</span>
      </el-menu-item>
      <el-menu-item index="carriers">
        <i class="el-icon-tickets"></i>
        <span class="sw-menu-p">Carriers</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <span class="sw-menu-p">More</span>
        </template>
        <el-menu-item index="about">
          <i class="el-icon-service"></i>
          <span class="sw-menu-p">About</span>
        </el-menu-item>
        <el-menu-item index="security">
          <i class="el-icon-umbrella"></i>
          <span class="sw-menu-p">Security</span>
        </el-menu-item>
        <el-menu-item index="locations">
          <i class="el-icon-location-outline"></i>
          <span class="sw-menu-p">Locations</span>
        </el-menu-item>
        <el-menu-item index="products">
          <i class="el-icon-goods"></i>
          <span class="sw-menu-p">Products</span>
        </el-menu-item>
        <el-menu-item index="pricing">
          <i class="el-icon-money"></i>
          <span class="sw-menu-p">Pricing</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="download" style="float: right">
        <span class="sw-menu-p">Download</span>
        <i class="el-icon-download"></i>
      </el-menu-item>
      <el-menu-item
        v-if="!$auth.$state.loggedIn"
        index="login"
        style="float: right"
      >
        <span class="sw-menu-p">JOIN US</span>
      </el-menu-item>
      <el-menu-item
        v-if="$auth.$state.loggedIn"
        index=""
        style="float: right"
        @click="$auth.logout()"
      >
        <i class="el-icon-arrow-left"></i>
        <span class="sw-menu-p">Logout</span>
      </el-menu-item>
      <el-menu-item
        v-if="$auth.$state.loggedIn"
        index="profile"
        style="float: right"
      >
        <i class="el-icon-user"></i>
        <span class="sw-menu-p">Profile</span>
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
      disabled: CONSTANTS.HEADER_DISABLED_ROUTES,
      activeIndex: '1'
    }
  },
  computed: {
    username() {
      return this.$auth.user.name
    }
  },
  created() {},
  methods: {
    handleSelect(key) {
      if (key === 'senders') {
        this.$router.push({ name: 'orders-type', params: { type: 'send' } })
      } else if (key === 'carriers') {
        this.$router.push({ name: 'orders-type', params: { type: 'carry' } })
      } else if (key === 'send') {
        this.$router.push({
          name: 'orders-create-type',
          params: { type: 'send' }
        })
      } else if (key === 'carry') {
        this.$router.push({
          name: 'orders-create-type',
          params: { type: 'carry' }
        })
      } else {
        this.$router.push({ name: key })
      }
    }
  }
}
</script>

<style>
.sw-burger-menu i {
  color: rgba(213, 213, 213, 0.53);
  padding-top: 5px;
}

.sw-burger-menu span:hover {
  color: white;
}

.sw-burger-menu span {
  color: rgba(213, 213, 213, 0.53);
}

.bg-light {
  background: rgba(0, 0, 0, 0);
}

.grid-content {
  min-height: 50px;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0);
}
</style>

<style>
.bm-burger-button {
  width: 36px;
  height: 30px;
  left: 25px;
  top: 25px;
  cursor: pointer;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: rgb(63, 63, 65); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
</style>
