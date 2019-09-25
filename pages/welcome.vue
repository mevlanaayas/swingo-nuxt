<template>
  <div>
    <el-row>
      <el-col :xs="24" :md="12" class="sw-centered">
        <div>
          <h1>
            What would you like to do next?
          </h1>

          <span
            v-for="option in appOptions"
            :key="option.title"
            @click="doCardRouting(option.index)"
          >
            <spacer-item space="20"></spacer-item>
            <el-row :gutter="12">
              <el-card shadow="hover">
                <h3 style="margin: 0; padding: 0">{{ option.title }}</h3>
                <p style="margin: 0; padding: 0">
                  {{ option.detail }}
                </p>
              </el-card>
            </el-row>
          </span>
        </div>
      </el-col>
      <el-col :xs="24" :md="12" class="hidden-sm-and-down">
        <div>
          <h1
            class="h1tag welcome-quote"
            data-heading="Senders, Carriers, Packets... All at the same place"
          >
            Senders, Carriers, Packets... All at the same place
          </h1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import SpacerItem from '../components/SpacerItem'

export default {
  auth: true,
  meta: {
    auth: { authority: 2 }
  },
  name: 'Welcome',
  components: {
    SpacerItem
  },
  data() {
    return {
      appOptions: [
        {
          index: 'send',
          title: 'Send Packet',
          detail:
            'You can send a cargo via travellers who are going to that destination.'
        },
        {
          index: 'carry',
          title: 'Carry Packet',
          detail: 'Do you have empty space in your bag while travelling?'
        },
        {
          index: 'senders',
          title: 'Make a Bid Now',
          detail: 'View currently created orders from senders and carriers.'
        }
      ]
    }
  },
  methods: {
    doCardRouting(route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped></style>
