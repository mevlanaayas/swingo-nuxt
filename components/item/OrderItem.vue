<template>
  <div>
    <div class="order-item-container show-mobile-card">
      <div class="order-item-left" style="text-align: center">
        <div class="inliner">
          <div
            :class="
              isLong(element.from_city, element.to_city)
                ? 'order-item-15-bold max-width-constraint-471 min-height-constraint-50 start city-styled'
                : 'order-item-35-bold max-width-constraint-471 min-height-constraint-50 start city-styled'
            "
          >
            {{ element.from_city | upper_all }} -
            {{ element.to_city | upper_all }}
          </div>

          <spacer-item class="spacer" space="35"></spacer-item>

          <div class="start" style="margin-bottom: -10px">
            <img
              src="../../assets/calendar.png"
              alt="sw-calendar"
              class="sw-icon-img-lg"
            />
          </div>

          <spacer-item space="5"></spacer-item>

          <div class="start">
            <div class="order-item-25-bold order-item-seq-130 date-styled">
              <span>{{ element.from_date | format_date }}</span>
            </div>

            <div class="order-item-25-bold order-item-seq-20 order-space-date">
              <img
                src="../../assets/arrow.png"
                alt="sw-arrow"
                class="sw-icon-img-sm"
              />
            </div>

            <div class="order-item-25-bold order-item-seq-130 date-styled">
              <span>{{ element.to_date | format_date }}</span>
            </div>
          </div>

          <spacer-item space="0" class="order-item-padding"></spacer-item>

          <div class="start">
            <div
              class="order-item-25-bold order-item-seq-106 btn-styled btn-styled-left"
            >
              <span>{{ element.size | upper_first_lower_others }}</span>
            </div>

            <div class="order-item-25-bold order-item-seq-20 order-space">
              <span>&nbsp;</span>
            </div>

            <div
              class="order-item-25-bold order-item-seq-106 btn-styled btn-styled-right"
            >
              <span>{{ element.weight }} Kg</span>
            </div>
          </div>

          <div
            v-if="orderType === constants.ORDER_TYPES.SEND_ORDER"
            class="payment-style center"
          >
            <span class="order-item-25-bold black-payment">payment</span>

            <spacer-item space="1"></spacer-item>

            <span class="order-item-80-bold">{{ element.price }} $</span>
          </div>

          <div
            v-if="orderType === constants.ORDER_TYPES.CARRY_ORDER"
            class="payment-style center"
          >
            <span class="order-item-25-bold black-payment">payment</span>

            <spacer-item space="20"></spacer-item>

            <el-form
              ref="bidForm"
              :inline="true"
              :rules="bidRules"
              :model="bidForm"
            >
              <el-form-item prop="price">
                <el-input v-model.number="bidForm.price" type="number">
                  <i slot="prefix" class="fas fa-money-bill el-input__icon"></i>
                  <i
                    slot="suffix"
                    class="fas fa-dollar-sign el-input__icon"
                  ></i>
                </el-input>
              </el-form-item>
            </el-form>

            <spacer-item space="60"></spacer-item>
          </div>

          <div
            v-if="!profile && orderType === constants.ORDER_TYPES.SEND_ORDER"
            class="center order-item-margin"
          >
            <el-button class="order-item-btn" @click="makeADirectBid(element)">
              I can carry
            </el-button>
          </div>

          <div
            v-if="!profile && orderType === constants.ORDER_TYPES.CARRY_ORDER"
            class="center order-item-margin"
          >
            <el-button class="order-item-btn" @click="makeABid(element)">
              Send Now
            </el-button>
          </div>
        </div>
      </div>
      <div class="order-item-right">
        <div class="avatar-rectangle">
          <div class="order-item-18-bold order-username">
            {{ element.created_by }}
          </div>
          <div class="order-user-avatar-container">
            <div class="order-user-avatar">
              <img
                src="../../assets/portrewb.png"
                alt="sw-avatar"
                class="sw-avatar"
              />
            </div>
          </div>
        </div>
        <spacer-item space="10"></spacer-item>
        <div class="order-item-notes order-item-25-bold">
          <span>Note:</span>
          <br />
          <span class="order-item-16-bold note-style">
            {{ element.comments }}
          </span>
        </div>
      </div>
      <spacer-item space="60"></spacer-item>
    </div>

    <div class="order-item-container show-web-card">
      <div class="order-item-left" style="text-align: center">
        <div class="inliner">
          <div
            :class="
              isLong(element.from_city, element.to_city)
                ? 'order-item-15-bold max-width-constraint-471 min-height-constraint-50 start city-styled'
                : 'order-item-35-bold max-width-constraint-471 min-height-constraint-50 start city-styled'
            "
          >
            {{ element.from_city | upper_all }} -
            {{ element.to_city | upper_all }}
          </div>

          <spacer-item class="spacer" space="35"></spacer-item>

          <div
            v-if="orderType === constants.ORDER_TYPES.SEND_ORDER"
            class="payment-style center"
          >
            <span class="order-item-25-bold black-payment">payment</span>

            <spacer-item space="1"></spacer-item>

            <span class="order-item-80-bold">{{ element.price }} $</span>
          </div>

          <div
            v-if="orderType === constants.ORDER_TYPES.CARRY_ORDER"
            class="payment-style center"
          >
            <span class="order-item-25-bold black-payment">payment</span>

            <spacer-item space="20"></spacer-item>

            <el-form
              ref="bidForm"
              :inline="true"
              :rules="bidRules"
              :model="bidForm"
            >
              <el-form-item prop="price">
                <el-input v-model.number="bidForm.price" type="number">
                  <i slot="prefix" class="fas fa-money-bill el-input__icon"></i>
                  <i
                    slot="suffix"
                    class="fas fa-dollar-sign el-input__icon"
                  ></i>
                </el-input>
              </el-form-item>
            </el-form>

            <spacer-item space="60"></spacer-item>
          </div>

          <div class="start" style="margin-bottom: -10px">
            <img
              src="../../assets/calendar.png"
              alt="sw-calendar"
              class="sw-icon-img-lg"
            />
          </div>

          <spacer-item space="5"></spacer-item>

          <div class="start">
            <div class="order-item-25-bold order-item-seq-130 date-styled">
              <span>{{ element.from_date | format_date }}</span>
            </div>

            <div class="order-item-25-bold order-item-seq-20 order-space-date">
              <img
                src="../../assets/arrow.png"
                alt="sw-arrow"
                class="sw-icon-img-sm"
              />
            </div>

            <div class="order-item-25-bold order-item-seq-130 date-styled">
              <span>{{ element.to_date | format_date }}</span>
            </div>
          </div>

          <spacer-item space="0" class="order-item-padding"></spacer-item>

          <div class="start">
            <div
              class="order-item-25-bold order-item-seq-106 btn-styled btn-styled-left"
            >
              <span>{{ element.size | upper_first_lower_others }}</span>
            </div>

            <div class="order-item-25-bold order-item-seq-20 order-space">
              <span>&nbsp;</span>
            </div>

            <div
              class="order-item-25-bold order-item-seq-106 btn-styled btn-styled-right"
            >
              <span>{{ element.weight }} Kg</span>
            </div>
          </div>

          <spacer-item space="40" class="order-item-padding"></spacer-item>
        </div>
      </div>
      <div class="order-item-right">
        <spacer-item space="10"></spacer-item>
        <div class="order-item-notes order-item-25-bold">
          <span>Note:</span>
          <br />
          <span class="order-item-16-bold note-style">
            {{ element.comments }}
          </span>
        </div>

        <div
          v-if="!profile && orderType === constants.ORDER_TYPES.SEND_ORDER"
          class="center order-item-margin"
        >
          <el-button class="order-item-btn" @click="makeADirectBid(element)">
            I can carry
          </el-button>
        </div>

        <div
          v-if="!profile && orderType === constants.ORDER_TYPES.CARRY_ORDER"
          class="center order-item-margin"
        >
          <el-button class="order-item-btn" @click="makeABid(element)">
            Send Now
          </el-button>
        </div>
      </div>
      <spacer-item space="60"></spacer-item>
    </div>
  </div>
</template>

<script>
import * as Swal from 'sweetalert2'
import SpacerItem from '../../components/SpacerItem'
import CONSTANTS from '../../utils/constants'

export default {
  name: 'OrderItem',
  components: {
    SpacerItem
  },
  props: {
    element: {
      type: Object,
      required: true
    },
    orderType: {
      type: String,
      required: true
    },
    clickable: {
      type: Boolean,
      required: true
    },
    profile: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      constants: CONSTANTS,
      visible2: false,
      bidForm: {
        price: null
      },
      bidRules: {
        price: [
          { required: true, message: 'Please enter an Offer' },
          { type: 'integer', min: 10, message: 'Minimum offer is 10$' }
        ]
      }
    }
  },
  methods: {
    makeABid(order) {
      if (!this.$store.getters.isAuthenticated) {
        this.unauthenticatedBid()
      } else {
        this.$refs.bidForm.validate((valid) => {
          if (valid) {
            this.sendRequest(order)
          } else {
            return false
          }
        })
      }
    },
    makeADirectBid(order) {
      if (!this.$store.getters.isAuthenticated) {
        this.unauthenticatedBid()
      } else {
        this.sendRequest(order)
      }
    },
    unauthenticatedBid() {
      Swal.fire({
        title: 'Do you want to join us?',
        html:
          '<div style="text-align: start"><p>Being Swingo member is required to talk with others</p>' +
          '<p>You will be able to:</p>' +
          '<ul><li>Become a Sender/Carrier</li>' +
          '<li>Contact with Senders/Carriers</li>' +
          '<li>Enjoy with Fast and Secure cargo delivery</li>' +
          '</ul></div>',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, let me login!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true,
        allowOutsideClick: false
      }).then((result) => {
        if (result.value) {
          setTimeout(() => {
            this.$router.push({ name: 'login' })
          }, 1000)
        }
      })
    },
    sendRequest(order) {
      this.visible2 = false
      let request = {}
      if (this.orderType === CONSTANTS.ORDER_TYPES.SEND_ORDER) {
        request = { send_order: order.id, value: 0 }
      } else {
        request = { carry_order: order.id, value: this.bidForm.price }
      }
      Swal.fire({
        title: 'Do you want to create match?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes, progress!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          this.$repository.CreateMatch(request).then((response) => {
            if (response.status === 400) {
              Swal.fire({
                allowOutsideClick: false,
                showConfirmButton: false,
                title: response,
                type: 'error',
                timer: 1500
              })
            } else {
              Swal.fire({
                allowOutsideClick: false,
                showConfirmButton: false,
                title: 'Confirmed, Redirecting!',
                type: 'success',
                onOpen: this.bidCreated,
                timer: 1500
              })
            }
          })
        }
      })
    },
    bidCreated() {
      setTimeout(() => {
        this.$router.push({ name: 'my-matches' })
      }, 1500)
    },
    isOwner(item) {
      const createdBy = item.created_by
      return createdBy === localStorage.getItem('username')
    },
    isLong(fromCity, toCity) {
      return fromCity.length + toCity.length >= 18
    }
  }
}
</script>

<style scoped>
.min-height-constraint-50 {
  min-height: 50px;
}

.max-width-constraint-471 {
  max-width: 471px;
}

.inliner {
  display: inline-block;
}

.order-item-35-bold {
  font-size: 35px;
  font-weight: bold;
}

.order-item-25-bold {
  font-size: 25px;
  font-weight: bold;
}

.order-item-80-bold {
  font-size: 80px;
  font-weight: bold;
}

.order-item-18-bold {
  font-size: 18px;
  font-weight: bold;
}

.order-item-16-bold {
  font-size: 16px;
  font-weight: bold;
}

.order-item-19-bold {
  font-size: 19px !important;
  font-weight: bold;
}

.order-item-15-bold {
  font-size: 18px !important;
  font-weight: bold;
  letter-spacing: 0.1em;
}

.order-item-seq-130 {
  float: left;
  width: 130px;
}

.order-item-seq-106 {
  float: left;
  width: 106px;
}

.order-item-seq-20 {
  float: left;
  width: 20px;
}

.sw-icon-img-lg {
  height: 32px;
  width: 32px;
}

.sw-icon-img-sm {
  height: 16px;
  width: 16px;
}

.city-styled {
  letter-spacing: 0.1em;
}

.date-styled {
  width: 45%;
  letter-spacing: 0.2em;
}

.btn-styled {
  letter-spacing: 4px;
  padding: 2.5%;
  text-align: center;
  color: white;
  background-color: #656565;
  width: 40%;
}

.order-space {
  text-align: center;
  width: 10%;
}

.order-space-date {
  text-align: center;
  width: 10%;
}

.btn-styled-left {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.btn-styled-right {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.order-item-margin {
  margin-top: 25px;
}

.order-item-padding {
  padding-top: 65px;
}

.black-payment {
  letter-spacing: 0.1em;
  color: black;
}

.order-item-btn {
  letter-spacing: 0.1em;
  color: black;
  padding: 20px 40px;
  font-size: 28px;
  font-weight: bold;
  background-color: #f9b232;
  border-radius: 30px 30px 5px 5px;
}

.order-item-avatar {
  max-width: 25%;
  height: auto;
}

.order-item-notes {
  padding-left: 15%;
  padding-right: 15%;
  max-height: 250px;
  border-radius: 5px;
  text-align: start;
  letter-spacing: 0.2em;
  overflow: scroll;
}

.avatar-rectangle {
  width: 40%;
  margin-left: 60%;
  height: 250px;
  background: linear-gradient(to top right, #e3e5e4 50%, #f9b232 50%);
}

.note-style {
  letter-spacing: 0.1em;
}

.order-username {
  letter-spacing: 0.1em;
  padding-top: 30px;
}

.order-user-avatar-container {
  text-align: center;
}

.order-user-avatar {
  display: inline-block;
  text-align: center;
}

.sw-avatar {
  max-width: 50%;
  height: auto;
}

.el-form-item__error {
  color: white !important;
}

.el-form-item {
  margin-top: -5px;
  margin-right: 50px;
  margin-left: 50px;
}

@media only screen and (min-width: 1400px) {
  .order-item-container {
    padding-right: 10%;
    padding-left: 10%;
  }
}

@media only screen and (max-width: 1100px) {
  .show-mobile-card {
    display: none !important;
  }

  .city-styled {
    text-align: center !important;
  }

  .order-item-left {
    padding-top: 40px;
    background-color: #e3e5e4;
    width: 100%;
    position: relative;
  }

  .order-item-right {
    padding-top: 50px;
    background-color: #e3e5e4;
    width: 100%;
    position: relative;
    text-align: center;
    margin-top: -11px;
  }

  .order-item-left:after {
    z-index: 3;
    content: '';
    width: 60%;
    height: 4px;
    background: black;
    position: absolute;
    left: 15%;
    bottom: -4px;
  }

  .order-item-left .center {
    text-align: center;
  }

  .order-item-left .start {
    text-align: start;
  }

  .payment-style {
    margin-right: 15%;
    margin-left: 15%;
    width: auto;
    text-align: center;
    color: white;
    background-color: #3bb7b1;
    border-radius: 100px;
  }
}

@media only screen and (min-width: 1101px) {
  .show-web-card {
    display: none !important;
  }

  .order-item-left {
    padding-top: 40px;
    background-color: #e3e5e4;
    float: left;
    width: 50%;
    position: relative;
    height: 515px;
  }

  .order-item-right {
    padding-right: 1%;
    padding-top: 15px;
    background-color: #e3e5e4;
    width: 49%;
    position: relative;
    text-align: center;
    float: right;
    height: 540px;
  }

  .order-item-left:after {
    z-index: 3;
    content: '';
    width: 5px;
    height: 55%;
    background: black;
    position: absolute;
    right: -4px;
    top: 28%;
    bottom: 10%;
  }

  .order-item-left .center {
    text-align: center;
  }

  .order-item-left .start {
    text-align: start;
  }

  .payment-style {
    margin-right: 15%;
    margin-left: 15%;
    width: auto;
    margin-top: 95px;
    text-align: center;
    color: white;
    background-color: #3bb7b1;
    border-radius: 100px;
  }
}

@media only screen and (max-width: 500px) {
  .order-item-15-bold {
    font-size: 15px;
  }

  .order-item-35-bold {
    font-size: 25px;
  }

  .order-item-25-bold {
    font-size: 20px;
  }

  .date-styled {
    width: 45%;
    letter-spacing: 0.1em;
  }

  .order-item-notes {
    padding-right: 5px;
    padding-left: 5px;
  }
}
</style>
