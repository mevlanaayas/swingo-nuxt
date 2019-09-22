<template>
  <CreateOrder
    title="I need a Carrier for carrying my packet."
    :order-type="ORDER_TYPES.TRANSCEIVER_ORDER"
  >
  </CreateOrder>
</template>

<script>
import CreateOrder from '../components/CreateOrder'
import CONSTANTS from '../utils/constants'

export default {
  name: 'SendOrder',
  components: { CreateOrder },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES
    }
  }
}
</script>
