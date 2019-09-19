<template>
  <div :style="style"></div>
</template>

<script>
export default {
  name: 'SpacerItem',
  props: {
    space: {
      type: String,
      required: true
    }
  },
  computed: {
    style() {
      return 'margin-bottom: ' + this.space + 'px'
    }
  }
}
</script>
