<template>
  <div class="sidebar">
    <div class="sidebar-header">
      <div class="menu-icon"></div>
      <div class="logo"></div>
    </div>
    <div class="sidebar-menu">
      <router-link
        id="dashboard"
        class="sidebar-menu-item"
        :class="isActive('dashboard')"
        to="/dictionary/customer-list"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon dashboard"></div>
        <p>Tổng quan</p>
      </router-link>
      <router-link
        id="cash"
        class="sidebar-menu-item"
        :class="isActive('cash')"
        to="/dictionary/employee-list"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon cash"></div>
        <p>Tiền mặt</p>
      </router-link>
      <router-link
        id="deposit"
        class="sidebar-menu-item"
        :class="isActive('deposit')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon deposit"></div>
        <p>Tiền gửi</p>
      </router-link>
      <router-link
        id="buy"
        class="sidebar-menu-item"
        :class="isActive('buy')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon buy"></div>
        <p>Mua hàng</p>
      </router-link>
      <router-link
        id="sell"
        class="sidebar-menu-item"
        :class="isActive('sell')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon sell"></div>
        <p>Bán hàng</p>
      </router-link>
      <router-link
        id="receipt"
        class="sidebar-menu-item"
        :class="isActive('receipt')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon receipt"></div>
        <p>Quản lý hóa đơn</p>
      </router-link>
      <router-link
        id="warehouse"
        class="sidebar-menu-item"
        :class="isActive('warehouse')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon warehouse"></div>
        <p>Kho</p>
      </router-link>
      <router-link
        id="tool"
        class="sidebar-menu-item"
        :class="isActive('tool')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon tool"></div>
        <p>Công cụ dụng cụ</p>
      </router-link>
      <router-link
        id="fixed-assets"
        class="sidebar-menu-item"
        :class="isActive('fixed-assets')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon fixed-assets"></div>
        <p>Tài sản cố định</p>
      </router-link>
      <router-link
        id="tax"
        class="sidebar-menu-item"
        :class="isActive('tax')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon tax"></div>
        <p>Thuế</p>
      </router-link>
      <router-link
        id="price"
        class="sidebar-menu-item"
        :class="isActive('price')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon price"></div>
        <p>Giá thành</p>
      </router-link>
      <router-link
        id="sumary"
        class="sidebar-menu-item"
        :class="isActive('sumary')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon sumary"></div>
        <p>Tổng hợp</p>
      </router-link>
      <router-link
        id="budget"
        class="sidebar-menu-item"
        :class="isActive('budget')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon budget"></div>
        <p>Ngân sách</p>
      </router-link>
      <router-link
        id="report"
        class="sidebar-menu-item"
        :class="isActive('report')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon report"></div>
        <p>Báo cáo</p>
      </router-link>
      <router-link
        id="finance-analyze"
        class="sidebar-menu-item"
        :class="isActive('finance-analyze')"
        to="/"
        @mousedown.native="onMenuItemClick($event)"
      >
        <div class="icon finance-analyze"></div>
        <p>Phân tích tài chính</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSidebar",
  data() {
    return {
      menuItemSelected: "",
    };
  },
  methods: {
    isActive(menuItemName) {
      return {
        active: this.menuItemSelected == menuItemName,
      };
    },
    onMenuItemClick(event) {
      this.menuItemSelected = event.currentTarget.id;
    }
  },
};
</script>

<style scoped>
@import url("../../css/layout/sidebar.css");
</style>