<template>
  <el-row class="sw-centered-hr">
    <h1>Swingo Security</h1>
    <h2>We have a shield for Both Senders and Carriers</h2>
  </el-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Swingo | Security',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Explore how we make Swingo more reliable'
        },
        {
          name: 'twitter:title',
          content: 'Swingo Security'
        },
        {
          name: 'twitter:description',
          content: 'Explore how we make Swingo more reliable'
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
  name: 'Security'
}
</script>
