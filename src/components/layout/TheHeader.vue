<template>
  <div class="header">
    <div class="header-left">
      <div class="menu-icon"></div>
      <div class="branch-name">
          CÔNG TY CỔ PHẦN MISA
          <div class="down-arrow"></div>
      </div>
    </div>
    <div class="header-right">
      <div class="header-right-item notification-icon" title="Thông báo"></div>
      <div class="header-right-item avatar"></div>
      <select class="header-right-item username">
        <option selected disabled hidden>Lê Nhật Nam</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>

<style scoped>
@import url("../../css/layout/header.css");
</style>