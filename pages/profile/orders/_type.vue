<template>
  <el-row class="sw-centered-hr">
    <el-col style="margin-right: 50px" :xs="24" :sm="24" :md="5">
      <spacer-item space="10"></spacer-item>
      <el-menu
        style="background-color: rgba(255,225,82,0); border-right: 0"
        default-active="2"
        class="el-menu-vertical-demo"
        @select="handleSelect"
      >
        <el-menu-item index="senders">
          <i class="el-icon-document-add"></i>
          <span>My Send Orders</span>
        </el-menu-item>
        <el-menu-item index="carriers">
          <i class="el-icon-document-remove"></i>
          <span>My Carry Orders</span>
        </el-menu-item>
        <el-menu-item index="matches">
          <i class="el-icon-document-checked"></i>
          <span>My Matches</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="24" :sm="24" :md="18">
      {{ orders }}
    </el-col>
  </el-row>
</template>
<script>
import SpacerItem from '@/components/SpacerItem'
import CONSTANTS from '@/utils/constants'

export default {
  auth: true,
  meta: {
    auth: { authority: 1 }
  },
  name: 'Order',
  validate({ params }) {
    return params.type === 'send' || params.type === 'carry'
  },
  components: {
    SpacerItem
  },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES,
      type: this.$route.params.type
    }
  },
  async asyncData(ctx) {
    let result = null
    if (ctx.params.type === CONSTANTS.ORDER_TYPES.CARRY_ORDER) {
      result = await ctx.app.$repository.MyCarryOrders()
    } else {
      result = await ctx.app.$repository.MySendOrders()
    }
    return {
      orders: result.results,
      totalOrders: result.count,
      totalPages: result.total_pages,
      loading: false
    }
  },
  methods: {
    handleSelect(index) {
      if (index === 'senders') {
        this.$router.push({
          name: 'profile-orders-type',
          params: { type: 'send' }
        })
      } else if (index === 'carriers') {
        this.$router.push({
          name: 'profile-orders-type',
          params: { type: 'carry' }
        })
      } else if (index === 'matches') {
        this.$router.push({ name: 'profile-match' })
      }
    }
  }
}
</script>

<style scoped>
.el-menu-item i,
span {
  font-size: 20px;
}
</style>
