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
        {{
          type === ORDER_TYPES.CARRY_ORDER
            ? 'List of Carriers'
            : 'List of Senders'
        }}
      </h2>
      <client-only>
        <el-alert
          v-if="type === ORDER_TYPES.CARRY_ORDER"
          title="Why Payment Form?"
          type="warning"
          :closable="false"
          show-icon
        >
          <span>
            You decide the PAYMENT while giving an offer to your Carrier. We are
            trying to make Swingo fair.
          </span>
        </el-alert>
      </client-only>

      <el-col :xs="24">
        <empty-list-place-holder
          v-if="orders.length === 0"
        ></empty-list-place-holder>
        <el-row v-for="order in orders" :key="order.id" class="mobile-margin">
          <order-item
            :element="order"
            type="order"
            :clickable="true"
            :profile="false"
            :order-type="type"
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
import OrderItem from '@/components/item/OrderItem'
import CITIES from '@/utils/cities'
import SpacerItem from '@/components/SpacerItem'
import EmptyListPlaceHolder from '@/components/EmptyListPlaceHolder'
import CONSTANTS from '@/utils/constants'

export default {
  auth: false,
  name: 'OrderList',
  components: {
    SpacerItem,
    OrderItem,
    EmptyListPlaceHolder
  },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES,
      type: this.$route.params.type,
      fromCitySelectOptions: [],
      toCitySelectOptions: [],
      cityList: [],
      fromCitySelectLoading: false,
      toCitySelectLoading: false,
      dateFilter: null,
      fromCityFilter: '',
      toCityFilter: '',
      currentPage: 1,
      orders: [],
      totalOrders: null,
      pageSize: null,
      totalPages: null,
      loading: true,
      pagination: {},
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
      return this.$auth.user.name
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
        if (this.orderType === CONSTANTS.ORDER_TYPES.SEND_ORDER) {
          this.$repository
            .ListTransceiverOrders({ params })
            .then((response) => {
              this.orders = response.data.results
              this.totalOrders = response.data.count
              this.totalPages = response.data.total_pages
              this.loading = false
            })
        } else if (this.orderType === CONSTANTS.ORDER_TYPES.CARRY_ORDER) {
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
  async asyncData(ctx) {
    let result = null
    if (ctx.params.type === CONSTANTS.ORDER_TYPES.CARRY_ORDER) {
      result = await ctx.app.$repository.ListTransceiverOrders()
    } else {
      result = await ctx.app.$repository.ListTransporterOrders()
    }
    return {
      orders: result.results,
      totalOrders: result.count,
      totalPages: result.total_pages,
      loading: false
    }
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
    },
    handleSizeChange() {
      this.listOrders()
    },
    handleCurrentChange() {
      this.listOrders()
    },
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
