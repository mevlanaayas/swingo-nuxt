<template>
  <el-row class="sw-centered-hr">
    <el-col class="hidden-sm-and-down" :sm="4">&nbsp;</el-col>
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
    <el-col :xs="24" :sm="24" :md="10">
      <el-row class="sw-centered-hr">
        <h2>
          My Matches
        </h2>
        <el-col :xs="24">
          <empty-list-place-holder
            v-if="matches.length === 0"
          ></empty-list-place-holder>
          <el-row v-for="match in matches" :key="match.id">
            <div @click="goToMatchDetail(match.id)">
              <match-item :element="match"></match-item>
            </div>
            <spacer-item space="20"></spacer-item>
          </el-row>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="hidden-sm-and-down" :sm="4">&nbsp;</el-col>
  </el-row>
</template>

<script>
import EmptyListPlaceHolder from '@/components/EmptyListPlaceHolder'
import SpacerItem from '@/components/SpacerItem'
import MatchItem from '@/components/item/MatchItem'
import CONSTANTS from '@/utils/constants'

export default {
  auth: true,
  meta: {
    auth: { authority: 1 }
  },
  name: 'Match',
  components: {
    SpacerItem,
    MatchItem,
    EmptyListPlaceHolder
  },
  data() {
    return {
      constants: CONSTANTS,
      totalMatches: null,
      totalPages: null,
      pageSize: null,
      currentPage: 1,
      matches: [],
      selected: ''
    }
  },
  async asyncData(ctx) {
    const result = await ctx.app.$repository.Match()
    return {
      matches: result.results,
      totalOrders: result.count,
      totalPages: result.total_pages,
      pageSize: result.items_per_page,
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
    },
    goToMatchDetail(matchId) {
      this.$router.push({
        name: 'profile-match-id',
        params: {
          id: matchId
        }
      })
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
