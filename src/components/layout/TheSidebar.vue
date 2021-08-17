<template>
    <div class="sidebar">
      <div class="sidebar-header">
        <div class="menu-icon"></div>
        <div class="logo"></div>
      </div>
      <div class="sidebar-menu">
        <router-link class="sidebar-menu-item" to="/dictionary/customer-list">
          <div class="dashboard"></div>
          <p>Khách hàng</p>
        </router-link>
        <router-link class="sidebar-menu-item active" to="/dictionary/employee-list">
          <div class="cash"></div>
          <p>Nhân viên</p>
        </router-link>
      </div>
    </div>
</template>

<style scoped>
@import url("../../css/layout/sidebar.css");
</style>