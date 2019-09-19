<template>
  <div>
    <el-row class="sw-centered-hr">
      <el-col :xs="24" :md="12">
        <h2>
          {{ title }}
        </h2>
        <el-alert
          class="order-explanations"
          :closable="false"
          title="Explanations"
          type="info"
          show-icon
        >
          <ul
            v-if="orderType === ORDER_TYPES.TRANSCEIVER_ORDER"
            class="order-explanations"
          >
            <li>{{ fromCityLabelForSender }}</li>
            <li>{{ toCityLabelForSender }}</li>
            <li>{{ fromDateLabelForSender }}</li>
            <li>{{ toDateLabelForSender }}</li>
            <li>{{ weightLabelForSender }}</li>
            <li>{{ sizeLabel }}</li>
            <li>{{ priceLabel }}</li>
            <li>{{ packetValueLabel }}</li>
            <li>{{ commentsLabelForSender }}</li>
          </ul>
          <ul
            v-if="orderType === ORDER_TYPES.TRANSPORTER_ORDER"
            class="order-explanations"
          >
            <li>{{ fromCityLabelForCarrier }}</li>
            <li>{{ toCityLabelForCarrier }}</li>
            <li>{{ fromDateLabelForCarrier }}</li>
            <li>{{ toDateLabelForCarrier }}</li>
            <li>{{ weightLabelForCarrier }}</li>
            <li>{{ sizeLabel }}</li>
            <li>{{ commentsLabelForCarrier }}</li>
          </ul>
        </el-alert>
      </el-col>
      <el-col :xs="24" :md="10">
        <div>
          <el-form
            ref="orderForm"
            :rules="orderCreateRules"
            :model="orderForm"
            label-width="125px"
          >
            <h5>Delivery Locations</h5>
            <spacer-item space="20"></spacer-item>
            <el-form-item label="Picking City" prop="from_city">
              <el-select
                v-model="orderForm.from_city"
                clearable
                filterable
                remote
                reserve-keyword
                placeholder="Type to search"
                :remote-method="remoteMethodFrom"
                :loading="fromCitySelectLoading"
              >
                <el-option
                  v-for="item in fromCitySelectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
                <i
                  slot="prefix"
                  class="fas fa-plane-departure el-input__icon"
                ></i>
              </el-select>
            </el-form-item>
            <el-form-item label="Delivery City" prop="to_city">
              <el-select
                v-model="orderForm.to_city"
                clearable
                filterable
                remote
                reserve-keyword
                placeholder="Type to search"
                :remote-method="remoteMethodTo"
                :loading="toCitySelectLoading"
              >
                <el-option
                  v-for="item in toCitySelectOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
                <i
                  slot="prefix"
                  class="fas fa-plane-arrival el-input__icon"
                ></i>
              </el-select>
            </el-form-item>

            <spacer-item space="40"></spacer-item>
            <h5>Delivery Dates</h5>
            <spacer-item space="20"></spacer-item>
            <el-form-item label="Picking Date" prop="from_date">
              <el-date-picker
                v-model="orderForm.from_date"
                type="date"
                align="right"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item label="Delivery Date" prop="to_city">
              <el-date-picker
                v-model="orderForm.to_date"
                type="date"
                align="right"
                :picker-options="pickerOptions"
              >
              </el-date-picker>
            </el-form-item>

            <spacer-item space="40"></spacer-item>
            <h5>Item Information</h5>
            <spacer-item space="20"></spacer-item>

            <el-form-item label="Item Weight" prop="weight">
              <el-input
                v-model.number="orderForm.weight"
                class="text-input-width"
                type="number"
              >
                <i slot="prefix" class="fas fa-dumbbell el-input__icon"></i>
                <span slot="suffix" style="padding-right: 5px">Kg</span>
              </el-input>
            </el-form-item>

            <el-form-item label="Item Size" prop="size">
              <el-select
                v-model="orderForm.size"
                filterable
                placeholder="Select"
              >
                <el-option
                  v-for="item in SIZE_OPTIONS"
                  :key="item.key"
                  :label="item.value"
                  :value="item.key"
                >
                  <span style="float: left">{{ item.value }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{
                    item.eg
                  }}</span>
                </el-option>
                <i slot="prefix" class="fas fa-expand el-input__icon"></i>
              </el-select>
            </el-form-item>

            <el-form-item
              v-if="orderType === ORDER_TYPES.TRANSCEIVER_ORDER"
              label="Price to Pay"
              prop="price"
            >
              <el-input
                v-model.number="orderForm.price"
                class="text-input-width"
                type="number"
              >
                <i slot="prefix" class="fas fa-money-bill el-input__icon"></i>
                <i slot="suffix" class="fas fa-dollar-sign el-input__icon"></i>
              </el-input>
            </el-form-item>

            <el-form-item
              v-if="orderType === ORDER_TYPES.TRANSCEIVER_ORDER"
              label="Item Value"
              prop="packet_value"
            >
              <el-input
                v-model.number="orderForm.packet_value"
                class="text-input-width"
                type="number"
              >
                <i slot="prefix" class="fas fa-heart el-input__icon"></i>
                <i slot="suffix" class="fas fa-dollar-sign el-input__icon"></i>
              </el-input>
            </el-form-item>

            <el-form-item label="Packet Details" prop="comments">
              <el-input
                v-model="orderForm.comments"
                class="text-input-width"
                type="textarea"
                maxlength="130"
                show-word-limit
                :autosize="{ minRows: 5, maxRows: 6 }"
                placeholder="Give more details about package (If required)"
              >
              </el-input>
            </el-form-item>

            <div class="term-notify">
              <span>
                By clicking "Create order" below, you agree to Swingo's Terms
                and acknowledge that you have read the
                <nuxt-link
                  class="terms-link"
                  :to="{ name: 'customer' }"
                  target="_blank"
                >
                  Swingo User Agreement.
                </nuxt-link>
              </span>
            </div>

            <spacer-item space="20"></spacer-item>

            <el-form-item>
              <el-button type="primary" @click="createOrder"
                >Create order</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CONSTANTS from '../utils/constants'
import cities from '../utils/cities'
import SpacerItem from './SpacerItem'

export default {
  name: 'CreateOrder',
  components: {
    SpacerItem
  },
  props: {
    title: String,
    orderType: Number
  },
  data() {
    return {
      fromDateLabelForSender:
        'Picking Date: When to Give your packet to the Carrier',
      toDateLabelForSender:
        'Delivery Date: When to Receive your packet from the Carrier',
      fromDateLabelForCarrier:
        'Picking Date: When to Pick a packet from the Sender',
      toDateLabelForCarrier:
        'Delivery Date: When to Deliver the packet to the Receiver',
      fromCityLabelForSender:
        'Picking City: Where to Give your packet to the Carrier',
      toCityLabelForSender:
        'Delivery City: Where to Receive your packet from the Carrier',
      fromCityLabelForCarrier:
        'Picking City: Where to Pick a packet from the Sender',
      toCityLabelForCarrier:
        'Delivery City: Where to Deliver the packet to the Receiver',

      weightLabelForSender:
        'Item Weight (In terms of KG): Total weight of your Item.',
      weightLabelForCarrier:
        'Item Weight (In terms of KG): Total weight, that you carry while travelling',
      sizeLabel: 'Item Size: Select appropriate size from list',

      commentsLabelForSender:
        'Packet Details: You can write anything about your Item. The clean summaries get more click.',
      commentsLabelForCarrier:
        'Packet Details: You can write anything about your Trip. The clean summaries get more click.',
      priceLabel:
        'Price to Pay (In terms of US Dollar): This is your expected pay for Carrier. You will be able change it while talking.',
      packetValueLabel:
        'Item Value (In terms of US Dollar): We use this value to make your experience better. Carriers is not going to able to see this.',

      fromCitySelectOptions: [],
      toCitySelectOptions: [],
      cityList: [],
      fromCitySelectLoading: false,
      toCitySelectLoading: false,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        },
        shortcuts: [
          {
            text: 'Today',
            onClick(picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: 'Tomorrow',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          },
          {
            text: 'A week after',
            onClick(picker) {
              const date = new Date()
              date.setTime(date.getTime() + 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }
        ]
      },
      orderForm: {
        from_city: '',
        to_city: '',
        weight: null,
        size: '',
        from_date: null,
        to_date: null,
        comments: '',
        price: null,
        packet_value: null
      },
      SIZE_OPTIONS: CONSTANTS.SIZE_OPTIONS,
      ORDER_TYPES: CONSTANTS.ORDER_TYPES,
      orderCreateRules: {
        from_city: [{ required: true, message: 'Please select a Source City' }],
        to_city: [
          { required: true, message: 'Please select a Destination City' }
        ],
        weight: [
          { required: true, message: 'Please enter a Package weight' },
          {
            type: 'integer',
            min: 1,
            message: 'Weight must be a greater than zero'
          }
        ],
        size: [{ required: true, message: 'Please enter a Package size' }],
        from_date: [{ required: true, message: 'Please enter a Start date' }],
        to_date: [{ required: true, message: 'Please enter a End date' }],
        price: [
          { required: true, message: 'Please enter a Price' },
          {
            type: 'integer',
            min: 10,
            message: 'Price must be a greater than zero'
          }
        ],
        packet_value: [
          { required: true, message: 'Please enter a Packet Value' },
          {
            type: 'integer',
            min: 1,
            message: 'Price must be a greater than zero'
          }
        ],
        comments: [
          { required: true, message: 'At least one word about you packet :(' }
        ]
      }
    }
  },
  computed: {
    username() {
      return localStorage.getItem('username')
    }
  },
  mounted() {
    this.cityList = cities.CITIES.map((item) => {
      return { value: item.id, label: item.name }
    })
  },
  methods: {
    remoteMethodFrom(query) {
      if (query !== '') {
        this.fromCitySelectLoading = true
        setTimeout(() => {
          this.fromCitySelectLoading = false
          this.fromCitySelectOptions = this.cityList.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.fromCitySelectOptions = []
      }
    },
    remoteMethodTo(query) {
      if (query !== '') {
        this.toCitySelectLoading = true
        setTimeout(() => {
          this.toCitySelectLoading = false
          this.toCitySelectOptions = this.cityList.filter((item) => {
            return item.label.toLowerCase().includes(query.toLowerCase())
          })
        }, 200)
      } else {
        this.toCitySelectOptions = []
      }
    },
    createOrder() {
      this.$refs.orderForm.validate((valid) => {
        if (valid) {
          this.sendRequest()
        } else {
          return false
        }
      })
    },
    sendRequest() {
      const params = {
        from_city: this.orderForm.from_city,
        to_city: this.orderForm.to_city,
        weight: this.orderForm.weight,
        size: this.orderForm.size,
        from_date: this.$options.filters.vuetify_to_backend(
          this.orderForm.from_date
        ),
        to_date: this.$options.filters.vuetify_to_backend(
          this.orderForm.to_date
        ),
        comments: this.orderForm.comments,
        price: this.orderForm.price,
        packet_value: this.orderForm.packet_value
      }
      if (this.orderType === CONSTANTS.ORDER_TYPES.TRANSCEIVER_ORDER) {
        this.$repository.CreateTransceiverOrder(params).then((response) => {
          if (response) {
            this.$router.push('senders')
          }
        })
      } else if (this.orderType === CONSTANTS.ORDER_TYPES.TRANSPORTER_ORDER) {
        this.$repository.CreateTransporterOrder(params).then((response) => {
          if (response) {
            this.$router.push('carriers')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.terms-link {
  margin: 0 auto;
}

.term-notify {
  width: 60%;
  text-align: start;
}
</style>
