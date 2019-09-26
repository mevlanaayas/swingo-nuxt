<template>
  <el-row class="sw-centered-hr">
    <h1>Swingo Pricing</h1>
    <h2>We always try to offer a fair deal for both Senders and Carriers.</h2>
    <h3>Our role is to be guarantor.</h3>

    <p>
      Sender pays delivery fee to Swingo. When delivery is done, Swingo pays
      delivery fee to Carrier.
    </p>
  </el-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Swingo | Pricing',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'See how Swingo calculating delivery price'
        },
        {
          name: 'twitter:title',
          content: 'Swingo Pricing'
        },
        {
          name: 'twitter:description',
          content: 'See how Swingo calculating delivery price'
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
  name: 'Pricing'
}
</script>
