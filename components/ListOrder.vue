<template>
  <div>
    <el-row class="sw-centered-hr">
      <spacer-item space="10"></spacer-item>
      <el-card>
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-date-picker
              v-model="dateFilter"
              disabled=""
              style="width: 100% !important;"
              class="hidden-xs-only"
              type="date"
              align="right"
              :picker-options="datePickerOptions"
            >
            </el-date-picker>
            <el-date-picker
              v-model="dateFilter"
              disabled=""
              style="width: 100% !important;"
              class="hidden-sm-and-up"
              type="date"
              align="right"
              :picker-options="smallDatePickerOptions"
            >
            </el-date-picker>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-select
              v-model="fromCityFilter"
              clearable
              style="width: 100% !important;"
              filterable
              remote
              reserve-keyword
              placeholder="From City"
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
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-select
              v-model="toCityFilter"
              clearable
              style="width: 100% !important;"
              filterable
              remote
              reserve-keyword
              placeholder="To City"
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
            </el-select>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6" :xl="6">
            <el-button
              type="primary"
              style="width: 100% !important;"
              @click="applyFilter"
            >
              Apply Filter
            </el-button>
          </el-col>
        </el-row>
      </el-card>
      <h2>
        {{ title }}
      </h2>
      <el-alert
        v-if="orderType === constants.ORDER_TYPES.TRANSPORTER_ORDER"
        title="Why Payment Form?"
        type="warning"
        :closable="false"
        show-icon
      >
        <span
          >You decide the PAYMENT while giving an offer to your Carrier. We are
          trying to make Swingo fair.</span
        >
      </el-alert>

      <el-col :xs="24">
        <empty-list-place-holder
          v-if="orders.length === 0"
        ></empty-list-place-holder>
        <el-row v-for="order in orders" :key="order.id" class="mobile-margin">
          <order-item
            :element="order"
            type="order"
            :clickable="true"
            :profile="profile"
            :order-type="orderType"
          ></order-item>
          <spacer-item space="20"></spacer-item>
        </el-row>
      </el-col>
    </el-row>
    <spacer-item space="40"></spacer-item>
    <el-row v-if="orders.length !== 0" type="flex" justify="end">
      <el-col :xs="24" :md="10">
        <el-pagination
          :current-page.sync="currentPage"
          :page-count="totalPages"
          :page-size="pageSize"
          :pager-count="5"
          layout="prev, pager, next, jumper"
          :total="totalOrders"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import OrderItem from '../components/item/OrderItem'
import CONSTANTS from '../utils/constants'
import CITIES from '../utils/cities'
import SpacerItem from './SpacerItem'
import EmptyListPlaceHolder from './EmptyListPlaceHolder'

export default {
  name: 'ListOrder',
  components: {
    SpacerItem,
    OrderItem,
    EmptyListPlaceHolder
  },
  props: {
    title: {
      type: String,
      default: 'Empty'
    },
    orderType: {
      type: Number,
      default: 0
    },
    profile: Boolean
  },
  data() {
    return {
      constants: CONSTANTS,
      fromCitySelectOptions: [],
      toCitySelectOptions: [],
      cityList: [],
      fromCitySelectLoading: false,
      toCitySelectLoading: false,
      dateFilter: null,
      fromCityFilter: '',
      toCityFilter: '',
      currentPage: 1,
      show: false,
      orders: [],
      totalOrders: null,
      pageSize: null,
      totalPages: null,
      loading: true,
      pagination: {},
      headers: [
        { text: 'From City', value: 'from_city', sortable: false },
        { text: 'To City', value: 'to_city', sortable: false },
        { text: 'From Date', value: 'from_date' },
        { text: 'To Date', value: 'to_date' }
      ],
      dialog: false,
      visible2: false,
      bidForm: {
        price: null
      },
      bidRules: {
        price: [
          { required: true, message: 'Please enter a Price' },
          {
            type: 'integer',
            min: 1,
            message: 'Price must be a greater than zero'
          }
        ]
      },
      datePickerOptions: {
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
      smallDatePickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now()
        }
      }
    }
  },
  computed: {
    username() {
      return this.$store.getters.user
    }
  },
  watch: {
    pagination: {
      handler() {
        const params = {
          ordering:
            (this.pagination.descending ? '-' : '') + this.pagination.sortBy,
          page: this.pagination.page
        }
        this.loading = true
        if (this.orderType === CONSTANTS.ORDER_TYPES.TRANSCEIVER_ORDER) {
          this.$repository
            .ListTransceiverOrders({ params })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.loading = false
            })
        } else if (this.orderType === CONSTANTS.ORDER_TYPES.TRANSPORTER_ORDER) {
          this.$repository
            .ListTransporterOrders({ params })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.loading = false
            })
        }
      },
      deep: true
    }
  },
  created() {
    this.listOrders()
  },
  mounted() {
    this.cityList = CITIES.CITIES.map((item) => {
      return { value: item.id, label: item.name }
    })
  },
  methods: {
    listOrders() {
      const params = { page: this.currentPage }
      if (this.fromCityFilter !== '') {
        params.from_city = this.fromCityFilter
      }
      if (this.toCityFilter !== '') {
        params.to_city = this.toCityFilter
      }
      if (this.orderType === CONSTANTS.ORDER_TYPES.TRANSCEIVER_ORDER) {
        if (this.profile) {
          this.$repository
            .MySendOrders({
              params
            })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.pageSize = response.data.items_per_page
            })
        } else {
          this.$repository
            .ListTransceiverOrders({
              params
            })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.pageSize = response.data.items_per_page
            })
        }
      } else if (this.orderType === CONSTANTS.ORDER_TYPES.TRANSPORTER_ORDER) {
        if (this.profile) {
          this.$repository
            .MyCarryOrders({
              params
            })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.pageSize = response.data.items_per_page
            })
        } else {
          this.$repository
            .ListTransporterOrders({
              params
            })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.pageSize = response.data.items_per_page
            })
        }
      }
    },
    handleSizeChange() {
      this.listOrders()
    },
    handleCurrentChange() {
      this.listOrders()
    },
    /*
            filter methods
             */
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
    applyFilter() {
      this.listOrders()
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 1100px) {
  .mobile-margin {
    margin-top: 40px;
  }
}
</style>
