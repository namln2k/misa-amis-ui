<template>
  <div>
    <div class="content-header">
      Nhân viên
      <div class="header-right"></div>
      <BaseButton text="Thêm mới nhân viên"></BaseButton>
    </div>
    <div class="grid-data">
      <div class="grid-header">
        <div class="flex-grow"></div>
        <div class="searchbox-container">
          <input placeholder="Tìm theo mã, tên nhân viên" type="text" />
          <div class="search-icon"></div>
        </div>
        <div class="reset-icon" title="Lấy lại dữ liệu"></div>
      </div>
      <div class="table-container">
        <table class="table-viewer">
          <thead class="table-header">
            <tr>
              <td>
                <input type="checkbox">
              </td>
              <td>MÃ NHÂN VIÊN</td>
              <td>TÊN NHÂN VIÊN</td>
              <td>GIỚI TÍNH</td>
              <td>NGÀY SINH</td>
              <td>SỐ CMND</td>
              <td>CHỨC DANH</td>
              <td>TÊN ĐƠN VỊ</td>
              <td>SỐ TÀI KHOẢN</td>
              <td>TÊN NGÂN HÀNG</td>
              <td>CHI NHÁNH TK NGÂN HÀNG</td>
              <td>CHỨC NĂNG</td>
            </tr>
          </thead>
          <tbody class="table-body"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../../components/base/BaseButton.vue";

export default {
  name: "EmployeeList",
  components: {
    BaseButton,
  },
};
</script>

<style scoped>
@import url("../../../css/views/dictionary/employee/employee-list.css");
</style>