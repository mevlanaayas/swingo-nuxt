<template>
  <div class="clickable-card">
    <el-card>
      <el-row :gutter="5">
        <el-col :span="24">
          <el-avatar
            name="user"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <p>
            {{ getOrder(element).created_by }}'s comments:
            {{ getOrder(element).comments }}
          </p>
        </el-col>
        <hr />
        <el-col :span="24">
          <h2 v-if="matchCarrier === username">Sender: {{ matchSender }}</h2>
          <h2 v-if="matchSender === username">Carrier: {{ matchCarrier }}</h2>
          <p>
            Date:
            {{ getOrder(element).from_date | format_date }} &nbsp;&nbsp;
            {{ getOrder(element).to_date | format_date }}
          </p>
          <p>
            Locations:
            {{ getOrder(element).from_city }} &nbsp;&nbsp;
            {{ getOrder(element).to_city }}
          </p>
          <p>
            Size and Weight:
            {{ getOrder(element).size }} &nbsp;&nbsp;
            {{ getOrder(element).weight }} kg
          </p>
        </el-col>
        <hr />
        <el-col :span="24">
          <p>
            Price:
            {{ element.value }} &nbsp;&nbsp;
            {{ getOrder(element).price }}
          </p>
          <p>
            Payment Method:
            <span v-if="element.payment_type === null">Waiting</span>
            <span v-else>{{ element.payment_type }}</span>
          </p>
          <spacer-item space="20"></spacer-item>
          <el-row type="flex" justify="end">
            <div>
              <el-button @click="goto(element.id)">
                Go To Details
              </el-button>
            </div>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import CONSTANTS from '../../utils/constants'

export default {
  name: 'MatchElement',
  props: {
    element: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      constants: CONSTANTS,
      visible2: false
    }
  },
  computed: {
    matchSender() {
      if (this.element != null) {
        return this.element.sender.username
      }
      return ''
    },
    matchCarrier() {
      if (this.element != null) {
        return this.element.carrier.username
      }
      return ''
    },
    username() {
      return localStorage.getItem('username')
    }
  },
  methods: {
    isOwner(item) {
      const createdBy = item.created_by
      return createdBy === localStorage.getItem('username')
    },
    goto(matchId) {
      this.$router.push({
        name: 'checkout',
        params: {
          matchId
        }
      })
    },
    getOrder(element) {
      if (element.send_order !== null) {
        return element.send_order
      } else if (element.carry_order !== null) {
        return element.carry_order
      } else {
        return null
      }
    }
  }
}
</script>
