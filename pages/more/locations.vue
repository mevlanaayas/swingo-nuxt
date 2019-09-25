<template>
  <el-row class="sw-centered-hr">
    <spacer-item space="20"></spacer-item>
    <client-only>
      <el-alert
        :closable="false"
        title="About Location Changes"
        type="info"
        show-icon
      >
        <p class="locations-alert">
          We are updating locations in places according to the regulations. To
          give you the best experience.
        </p>
      </el-alert>
    </client-only>
    <h1>Swingo Locations</h1>
    <span>Click one to list: </span>
    <span class="index" @click="remoteMethod('')">ALL</span>
    <span
      v-for="bet in alphabet"
      :key="bet"
      class="index"
      @click="remoteMethod(bet)"
      >{{ bet }}</span
    >
    <h2>
      <span v-for="location in locationList" :key="location.id"
        >{{ location.label }} <br
      /></span>
    </h2>
  </el-row>
</template>

<script>
import SpacerItem from '../../components/SpacerItem'
import cities from '../../utils/cities'

export default {
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'Locations',
  components: { SpacerItem },
  data() {
    return {
      locations: [],
      locationList: [],
      alphabet: 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('')
    }
  },
  async asyncData(ctx) {
    return {
      locations: await cities.CITIES.map((item) => {
        return { value: item.id, label: item.name }
      })
    }
  },
  methods: {
    remoteMethod(query) {
      if (query !== '') {
        this.locationList = this.locations.filter((item) => {
          return item.label.toLowerCase().indexOf(query.toLowerCase()) === 0
        })
      } else {
        this.locationList = this.locations
      }
    }
  }
}
</script>

<style scoped>
.locations-alert {
  font-size: 14px;
}

.index {
  font-size: 20px;
  padding: 10px;
  margin-bottom: 5px;
  text-decoration: underline;
  cursor: pointer;
}
</style>
