<template>
  <div class="clickable-card">
    <el-row>
      <el-col :span="24">
        <el-card shadow="hover">
          <el-row style="text-align: center" type="flex" justify="center">
            <el-col :xs="24">
              <i class="fas fa-battery-empty"></i>&nbsp;There is nothing to
              list! <br />
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'EmptyListPlaceHolder'
}
</script>
