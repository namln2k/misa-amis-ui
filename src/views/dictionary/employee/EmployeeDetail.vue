<template>
  <div class="modal-background">
    <div class="employee-form">
      <div class="form-header">
        <div class="form-title">
          <div class="header-title">
            <div class="title-text">Thông tin nhân viên</div>
            <div class="title-checkbox-component">
              <input type="checkbox" />
              <label class="checkbox-label">Là khách hàng</label>
            </div>
            <div class="title-checkbox-component">
              <input type="checkbox" />
              <label class="checkbox-label">Là nhà cung cấp</label>
            </div>
          </div>
        </div>
        <div class="form-close">
          <div class="help"></div>
          <div class="close"></div>
        </div>
      </div>
      <div class="form-content">
        <div class="content-body">
            <div class="body-upper">
                <div class="upper-left">
                    <div class="row-input">
                    </div>
                    <div class="row-input"></div>
                    <div class="row-input"></div>
                </div>
                <div class="upper-right"></div>
            </div>
            <div class="body-lower"></div>
        </div>
        <div class="content-footer">
          <div class="divide"></div>
          <div class="footer-container">
            <BaseSecondButton text="Hủy"></BaseSecondButton>
            <div class="footer-right" >
              <BaseSecondButton text="Hủy" style="margin-right: 6px"></BaseSecondButton>
              <BaseButton text="Cất và thêm"></BaseButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseSecondButton from "../../../components/base/BaseSecondButton.vue";
import BaseButton from "../../../components/base/BaseButton.vue";

export default {
  name: "EmployeeDetail",
  components: {
    BaseSecondButton,
    BaseButton
  },
};
</script>

<style scoped>
@import url("../../../css/views/dictionary/employee/employee-detail.css");
</style>