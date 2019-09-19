<template>
  <div v-if="!headerDisabledRoutes.includes(this.$route.name)">
    <el-row class="hidden-md-and-up">
      <el-menu class="sw-nav-menu" mode="horizontal" @select="handleSelect">
        <el-menu-item class="sw-menu-item" index="home">
          <img src="../assets/logo.png" alt="logo" class="header-logo" />
        </el-menu-item>
      </el-menu>

      <el-col :xs="24">
        <div class="grid-content bg-light">
          <Slide disable-outside-click no-overlay class="sw-burger-menu" right>
            <nuxt-link id="home" to="home">
              <i class="fas fa-home"></i>
              <span>Home</span>
            </nuxt-link>
            <nuxt-link id="send" to="send">
              <i class="fas fa-share-square"></i>
              <span>Send</span>
            </nuxt-link>
            <nuxt-link id="carry" to="carry">
              <i class="fas fa-baby-carriage"></i>
              <span>Carry</span>
            </nuxt-link>
            <nuxt-link id="senders" to="senders">
              <i class="fas fa-share-square"></i>
              <span>Senders</span>
            </nuxt-link>
            <nuxt-link id="carriers" to="carriers">
              <i class="fas fa-baby-carriage"></i>
              <span>Carriers</span>
            </nuxt-link>

            <nuxt-link id="profile" to="profile">
              <i class="fas fa-user"></i>
              <span>Profile</span>
            </nuxt-link>
            <nuxt-link
              v-if="!this.$store.getters.isAuthenticated"
              id="login"
              to="login"
            >
              <i class="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </nuxt-link>
            <nuxt-link
              v-if="this.$store.getters.isAuthenticated"
              id="logout"
              to="login"
              @click="$auth.logout()"
            >
              <i class="fas fa-sign-in-alt"></i>
              <span>Logout</span>
            </nuxt-link>
          </Slide>
        </div>
      </el-col>
    </el-row>
    <el-menu
      :default-active="activeIndex"
      class="sw-nav-menu hidden-sm-and-down"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="home">
        <img src="../assets/logo.png" alt="logo" class="header-logo" />
        <span
          style="font-family: wigrumbold, sans-serif; padding-left: 5px; font-size: 17px; color: black"
          >Swingo</span
        >
      </el-menu-item>

      <el-menu-item v-if="$store.getters.isAuthenticated" index="send">
        <i class="el-icon-timer"></i>
        <span class="sw-menu-p">Send</span>
      </el-menu-item>
      <el-menu-item v-if="$store.getters.isAuthenticated" index="carry">
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
        v-if="!$store.getters.isAuthenticated"
        index="login"
        style="float: right"
      >
        <span class="sw-menu-p">JOIN US</span>
      </el-menu-item>
      <el-menu-item
        v-if="$store.getters.isAuthenticated"
        index=""
        style="float: right"
        @click="$auth.logout()"
      >
        <i class="el-icon-arrow-left"></i>
        <span class="sw-menu-p">Logout</span>
      </el-menu-item>
      <el-menu-item
        v-if="$store.getters.isAuthenticated"
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
import { Slide } from 'vue-burger-menu'
import CONSTANTS from '../utils/constants'

export default {
  name: 'Header',
  components: {
    Slide
  },
  data() {
    return {
      headerDisabledRoutes: CONSTANTS.HEADER_DISABLED_ROUTES,
      activeIndex: '1'
    }
  },
  computed: {
    username() {
      return localStorage.getItem('username')
    }
  },
  created() {},
  methods: {
    handleSelect(key) {
      this.$router.push({ name: key })
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
