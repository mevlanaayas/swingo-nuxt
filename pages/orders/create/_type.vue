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
  name: 'CarryOrder',
  components: { CreateOrder },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES
    }
  }
}
</script>
