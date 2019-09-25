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
  auth: false,
  meta: {
    auth: { authority: 2 }
  },
  name: 'Pricing'
}
</script>
