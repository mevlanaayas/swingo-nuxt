<template>
  <el-row class="sw-centered-hr">
    <spacer-item space="20"></spacer-item>
    <client-only>
      <el-alert
        :closable="false"
        title="About Product Limits"
        type="info"
        show-icon
      >
        <p class="products-alert">
          We are updating products in places according to the regulations.
          Please keep in mind to send listed products to have a cool experience.
        </p>
      </el-alert>
    </client-only>
    <h1>Swingo</h1>
    <h2>We are trying to keep product catalog wide.</h2>

    <h3>Coming soon</h3>
  </el-row>
</template>

<script>
import SpacerItem from '../../components/SpacerItem'

export default {
  head() {
    return {
      title: 'Swingo | Products',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'See the best products to Send or Carry @Swingo'
        },
        {
          name: 'twitter:title',
          content: 'Swingo Products'
        },
        {
          name: 'twitter:description',
          content: 'See the best products to Send or Carry'
        },
        {
          name: 'twitter:image',
          content:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTa7p9dP3luG09tHmTWk8WqqZ-LCuUt2H3y9veP5FAAYbkrMRk'
        }
      ]
    }
  },
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'Products',
  components: {
    SpacerItem
  }
}
</script>

<style scoped>
.products-alert {
  font-size: 14px;
}
</style>
