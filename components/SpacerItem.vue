<template>
  <div :style="'margin-bottom: ' + space + 'px'"></div>
</template>

<script>
export default {
  name: 'SpacerItem',
  props: {
    space: {
      type: String,
      required: true
    }
  }
}
</script>
