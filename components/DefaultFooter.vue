<template>
  <div class="footer">
    <el-menu disabled="" class="" mode="horizontal">
      <el-menu-item class="sw-menu-item" index="home">
        <img src="../assets/logo.png" alt="logo" class="header-logo" />
        <span
          style="font-family: wigrumbold, sans-serif; padding-left: 5px; font-size: 17px; color: black"
          >Swingo {{ new Date().getFullYear() }}</span
        >
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.sw-menu-item {
  border-bottom: none !important;
}

.footer {
  margin-bottom: -50px;
  text-align: end;
}
</style>
