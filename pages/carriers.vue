<template>
  <ListOrder
    :profile="false"
    title="List of Carriers"
    :order-type="ORDER_TYPES.TRANSPORTER_ORDER"
  >
  </ListOrder>
</template>

<script>
import CONSTANTS from '../utils/constants'
import ListOrder from '../components/ListOrder'
export default {
  auth: false,
  name: 'ListTransporterOrder',
  components: { ListOrder },
  data() {
    return {
      ORDER_TYPES: CONSTANTS.ORDER_TYPES
    }
  }
}
</script>
