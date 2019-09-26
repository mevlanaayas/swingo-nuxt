<template>
  <el-row class="sw-centered-hr">
    <h1>Swingo</h1>
    <h2>For Senders</h2>
    <h4>Safe, Fast, Affordable, Transparent</h4>

    <h2>For Carriers</h2>
    <h4>Eazy, Safe, Profitable, Transparent</h4>
  </el-row>
</template>

<script>
export default {
  head() {
    return {
      title: 'Swingo | About us',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Learn anything about Swingo'
        },
        {
          name: 'twitter:title',
          content: 'About Swingo'
        },
        {
          name: 'twitter:description',
          content: 'Learn anything about Swingo'
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
  name: 'About'
}
</script>
