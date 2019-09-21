<template>
  <div>
    <div class="landing-one-container">
      <div class="first">
        <div class="order-item-65-bold landing-one-title">
          We are helping people via people
        </div>
        <div class="order-item-29-medium landing-one-subtitle">
          We match deliveries from point A to B with people travelling between
          those points anyway.
        </div>

        <div class="btn-container">
          <el-button
            class="landing-one-btn landing-left-btn"
            type="warning"
            @click="goTo('carriers')"
            >SEND
          </el-button>
          <spacer-item class="web-bg" space="30"></spacer-item>
          <el-button
            class="landing-one-btn"
            type="warning"
            @click="goTo('senders')"
            >CARRY</el-button
          >
        </div>
      </div>

      <div class="second">
        <div class="order-item-65-bold landing-one-title">
          SENDERS
        </div>
      </div>

      <div class="second-one">
        <div class="order-item-35-medium landing-two-subtitle">
          Fast Deliveries
        </div>
      </div>

      <div class="second-two">
        <div class="order-item-35-medium landing-two-subtitle">
          Economic
        </div>
      </div>

      <div class="second-three">
        <div class="order-item-35-medium landing-two-subtitle">
          Safe and Sound
        </div>
      </div>

      <div class="third">
        <div class="order-item-65-bold landing-one-title">
          CARRIERS
        </div>
      </div>

      <div class="third-one">
        <div class="order-item-35-medium landing-three-subtitle">
          Secure Deliveries
        </div>
      </div>

      <div class="third-two">
        <div class="order-item-35-medium landing-three-subtitle">
          Profitable Travelling
        </div>
      </div>

      <div class="third-three">
        <div class="order-item-35-medium landing-three-subtitle">
          Guaranteed Payment
        </div>
      </div>

      <div class="forth">
        <div class="order-item-65-bold landing-four-title">
          Download
        </div>
        <nuxt-link :to="{ name: 'download' }"
          ><img src="../assets/ios.svg" alt="ios" class="ios-badge" />
        </nuxt-link>
        <nuxt-link :to="{ name: 'download' }"
          ><img src="../assets/android.png" alt="android" class="android-badge"
        /></nuxt-link>
      </div>
    </div>
    <img
      src="../assets/land.png"
      alt="landing one"
      class="sw-landing-img-one web-bg"
    />
    <img
      src="../assets/mobiland.png"
      alt="landing mobile"
      class="sw-landing-img-mobile mobile-bg"
    />
    <default-footer class="landing-footer web-bg"></default-footer>
  </div>
</template>

<script>
import SpacerItem from '../components/SpacerItem'
import DefaultFooter from '../components/DefaultFooter'

export default {
  auth: false,
  name: 'Home',
  components: { SpacerItem, DefaultFooter },
  methods: {
    goTo(target) {
      this.$router.push({ name: target })
    }
  }
}
</script>

<style scoped>
.order-item-65-bold {
  font-size: 45px;
}

.order-item-35-medium {
  font-size: 35px;
  font-family: wigrummedium, sans-serif;
}

.order-item-45-medium {
  font-size: 45px;
}

.order-item-29-medium {
  font-size: 22px;
}

.sw-landing-img-one {
  z-index: -10;
  width: 100%;
  height: auto;
  margin-bottom: -60px;
  margin-top: -2px;
}

.sw-landing-img-mobile {
  z-index: -10;
  width: 100%;
  height: auto;
  margin-top: -3px;
  position: absolute;
  top: 0;
}

.landing-two-subtitle {
  color: #028d8d;
}

.landing-three-subtitle {
  color: #028d8d;
}

.ios-badge {
  width: 50%;
  height: auto;
  padding-left: 28px;
}

.android-badge {
  width: 60%;
  height: auto;
}

.landing-footer {
  width: 100%;
}

@media only screen and (max-width: 1000px) {
  .web-bg {
    display: none !important;
  }

  .landing-one-container div {
    padding-right: 3%;
    padding-left: 3%;
  }

  .first {
    padding-top: 30px;
    width: 90%;
    margin-bottom: 200px;
  }

  .second {
  }

  .second-one {
    padding-bottom: 20px;
  }

  .second-two {
    padding-bottom: 20px;
  }

  .second-three {
    padding-bottom: 20px;
    margin-bottom: 280px;
  }

  .third {
  }

  .third-one {
    padding-bottom: 20px;
  }

  .third-two {
    padding-bottom: 20px;
  }

  .third-three {
    padding-bottom: 20px;
    margin-bottom: 250px;
  }

  .forth {
    margin-bottom: 275px;
  }

  .landing-one-title {
    margin-bottom: 40px;
    color: #ee7b9d;
  }

  .landing-one-subtitle {
    font-family: wigrummedium, sans-serif;
    margin-bottom: 80px;
    color: #028d8d;
  }

  .landing-one-btn {
    width: 130px;
    height: 55px;
    font-size: 24px;
    border-radius: 20px;
  }

  .landing-left-btn {
    margin-right: 10px;
  }

  .ios-badge {
    width: 50%;
    height: auto;
    padding-left: 15px;
  }

  .android-badge {
    width: 60%;
    height: auto;
  }

  .landing-four-title {
    color: #028d8d;
    padding-left: 30px;
    padding-bottom: 20px;
  }
}

@media only screen and (max-width: 350px) {
  .first {
    padding-top: 30px;
    width: 90%;
    margin-bottom: 150px;
  }

  .second {
  }

  .second-one {
    padding-bottom: 20px;
  }

  .second-two {
    padding-bottom: 20px;
  }

  .second-three {
    padding-bottom: 20px;
    margin-bottom: 150px;
  }

  .third {
  }

  .third-one {
    padding-bottom: 20px;
  }

  .third-two {
    padding-bottom: 20px;
  }

  .third-three {
    padding-bottom: 20px;
    margin-bottom: 150px;
  }

  .forth {
    margin-bottom: 70px;
  }

  .landing-four-title {
    color: #ee7b9d;
    padding: 12px;
    padding-bottom: 20px;
  }
}

@media only screen and (min-width: 1001px) {
  .mobile-bg {
    display: none !important;
  }

  .first {
    left: 5%;
    top: 4.5%;
    position: absolute;
    width: 30%;
  }

  .second {
    width: 100%;
    text-align: center;
    top: 28%;
    position: absolute;
  }

  .second-one {
    left: 15%;
    top: 40%;
    position: absolute;
  }

  .second-two {
    width: 100%;
    text-align: center;
    top: 46%;
    position: absolute;
  }

  .second-three {
    right: 10%;
    top: 38%;
    position: absolute;
  }

  .third {
    width: 100%;
    text-align: center;
    top: 59%;
    position: absolute;
  }

  .third-one {
    left: 5%;
    top: 71%;
    position: absolute;
  }

  .third-two {
    width: 100%;
    text-align: center;
    top: 77%;
    position: absolute;
  }

  .third-three {
    right: 5%;
    top: 69%;
    position: absolute;
  }

  .forth {
    position: absolute;
    bottom: 9%;
    right: 0;
    width: 50%;
  }

  .landing-one-title {
    margin-bottom: 40px;
    color: #ee7b9d;
  }

  .landing-one-subtitle {
    font-family: wigrummedium, sans-serif;
    margin-bottom: 110px;
    color: #028d8d;
  }

  .landing-one-btn {
    width: 230px;
    height: 60px;
    font-size: 28px;
    border-radius: 20px;
  }

  .ios-badge {
    width: 25%;
    padding: 12px;
    padding-bottom: 10px;
  }

  .android-badge {
    width: 30%;
  }

  .landing-four-title {
    color: #028d8d;
    padding: 12px;
    padding-bottom: 20px;
  }
}
</style>
