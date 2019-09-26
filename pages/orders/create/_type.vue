<template>
  <CreateOrder
    title="I want to Carry package."
    :order-type="ORDER_TYPES.CARRY_ORDER"
  ></CreateOrder>
</template>

<script>
import CreateOrder from '@/components/CreateOrder'
import CONSTANTS from '@/utils/constants'

export default {
  head() {
    return {
      title:
        'Swingo | ' + this.$route.params.type === 'send'
          ? 'Send with Swingo'
          : 'Carry with Swingo',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            this.$route.params.type === 'send'
              ? 'Create, match & chat and enjoy fast and reliable travelling'
              : 'Create, match & chat and earn money while travelling'
        },
        {
          name: 'twitter:title',
          content:
            this.$route.params.type === 'send'
              ? 'Send with Swingo'
              : 'Carry with Swingo'
        },
        {
          name: 'twitter:description',
          content:
            this.$route.params.type === 'send'
              ? 'Send with Swingo'
              : 'Carry with Swingo'
        },
        {
          name: 'twitter:image',
          content:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTa7p9dP3luG09tHmTWk8WqqZ-LCuUt2H3y9veP5FAAYbkrMRk'
        }
      ]
    }
  },
  auth: true,
  meta: {
    auth: { authority: 1 }
  },
  name: 'CarryOrder',
  validate({ params }) {
    return params.type === 'send' || params.type === 'carry'
  },
  components: { CreateOrder },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES
    }
  }
}
</script>
