<template>
  <ListOrder
    :profile="false"
    title="List of Senders"
    :order-type="ORDER_TYPES.TRANSCEIVER_ORDER"
  >
  </ListOrder>
</template>

<script>
import CONSTANTS from '../utils/constants'
import ListOrder from '../components/ListOrder'
export default {
  auth: false,
  name: 'ListTransceiverOrder',
  components: { ListOrder },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES
    }
  }
}
</script>
