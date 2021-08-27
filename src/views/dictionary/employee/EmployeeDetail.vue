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
          <div class="close" @click="$emit('cancelForm')"></div>
        </div>
      </div>
      <div class="form-content">
        <div class="content-body">
          <div class="body-upper">
            <div class="upper-left">
              <div class="row-input">
                <div class="w40-100 p-r-6">
                  <BaseTextInput
                    id="employee-code"
                    label="Mã"
                    :required="true"
                    :content="formData.EmployeeCode"
                    ref="employeeCode"
                  ></BaseTextInput>
                </div>
                <div class="w60-100">
                  <BaseTextInput
                    id="employee-name"
                    label="Tên"
                    :required="true"
                    :content="formData.EmployeeName"
                    ref="employeeName"
                  ></BaseTextInput>
                </div>
              </div>
              <div class="row-input">
                <div class="w100">
                  <BaseCombobox
                    id="department"
                    label="Đơn vị"
                    :options="departmentData"
                    :content="formData.DepartmentName"
                    :required="true"
                    @changeValue="changeValue"
                    ref="department"
                  ></BaseCombobox>
                </div>
              </div>
              <div class="row-input">
                <div class="w100">
                  <BaseTextInput
                    id="position"
                    label="Chức danh"
                    :content="formData.EmployeePosition"
                    ref="position"
                  ></BaseTextInput>
                </div>
              </div>
            </div>
            <div class="upper-right">
              <div class="row-input">
                <div class="w40-100 p-r-6">
                  <BaseDateInput
                    id="date-of-birth"
                    label="Ngày sinh"
                    ref="dateOfBirth"
                    :content="formData.DateOfBirth"
                  ></BaseDateInput>
                </div>
                <div class="w60-100 h-100">
                  <BaseGenderSelect
                    ref="gender"
                    :content="formData.Gender"
                  ></BaseGenderSelect>
                </div>
              </div>
              <div class="row-input">
                <div class="w60-100 p-r-6">
                  <BaseTextInput
                    id="identity-number"
                    label="Số CMND"
                    ref="identityNumber"
                    :content="formData.IdentityNumber"
                  ></BaseTextInput>
                </div>
                <div class="w40-100">
                  <BaseDateInput
                    id="identity-date"
                    label="Ngày cấp"
                    ref="identityDate"
                    :content="formData.IdentityDate"
                  ></BaseDateInput>
                </div>
              </div>
              <div class="row-input">
                <div class="w100">
                  <BaseTextInput
                    id="identity-place"
                    label="Nơi cấp"
                    ref="identityPlace"
                    :content="formData.IdentityPlace"
                  ></BaseTextInput>
                </div>
              </div>
            </div>
          </div>
          <div class="body-lower">
            <div class="row-input">
              <div class="w100">
                <BaseTextInput
                  id="address"
                  label="Địa chỉ"
                  ref="address"
                  :content="formData.Address"
                ></BaseTextInput>
              </div>
            </div>
            <div class="row-input">
              <div class="w25-100 p-r-6">
                <BaseTextInput
                  id="phone-number"
                  label="ĐT di động"
                  ref="phoneNumber"
                  :content="formData.PhoneNumber"
                ></BaseTextInput>
              </div>
              <div class="w25-100 p-r-6">
                <BaseTextInput
                  id="telephone-number"
                  label="ĐT cố định"
                  ref="telephoneNumber"
                  :content="formData.TelehoneNumber"
                ></BaseTextInput>
              </div>
              <div class="w25-100 p-r-6">
                <BaseTextInput
                  id="email"
                  label="Email"
                  ref="email"
                  :content="formData.Email"
                ></BaseTextInput>
              </div>
            </div>
            <div class="row-input">
              <div class="w25-100 p-r-6">
                <BaseTextInput
                  id="bank-account-number"
                  label="Tài khoản ngân hàng"
                  :content="formData.BankAccountNumber"
                  ref="bankAccountNumber"
                ></BaseTextInput>
              </div>
              <div class="w25-100 p-r-6">
                <BaseTextInput
                  id="bank-name"
                  label="Tên ngân hàng"
                  ref="bankName"
                  :content="formData.BankName"
                ></BaseTextInput>
              </div>
              <div class="w25-100 p-r-6">
                <BaseTextInput
                  id="bank-branch-name"
                  label="Chi nhánh"
                  ref="bankBranchName"
                  :content="formData.BankBranchName"
                ></BaseTextInput>
              </div>
            </div>
          </div>
        </div>
        <div class="content-footer">
          <div class="divide"></div>
          <div class="footer-container">
            <BaseSecondButton
              id="cancel"
              text="Hủy"
              @click="$emit('cancelForm')"
              tabindex="2"
            ></BaseSecondButton>
            <div class="footer-right">
              <BaseSecondButton
                id="save"
                text="Cất"
                style="margin-right: 6px"
                tabindex="2"
                @click="saveForm"
              ></BaseSecondButton>
              <BaseButton
                id="save-and-add"
                text="Cất và thêm"
                tabindex="2"
              ></BaseButton>
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
import BaseTextInput from "../../../components/base/BaseTextInput.vue";
import BaseDateInput from "../../../components/base/BaseDateInput.vue";
import BaseGenderSelect from "../../../components/base/BaseGenderSelect.vue";
import BaseCombobox from "../../../components/base/BaseCombobox.vue";
import EmployeeApi from "../../../api/EmployeeApi";

export default {
  name: "EmployeeDetail",
  components: {
    BaseSecondButton,
    BaseButton,
    BaseTextInput,
    BaseDateInput,
    BaseGenderSelect,
    BaseCombobox,
  },
  props: {
    departmentData: {
      type: Array,
      required: true,
    },
    formData: {
      type: Object,
      required: true,
    },
    editMode: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      data: {},
    };
  },
  methods: {
    focusEmployeeCode() {
      this.$refs.employeeCode.focusEmployeeCode();
    },
    getFormData() {
      this.data.EmployeeCode = this.$refs.employeeCode.getValue();
      this.data.EmployeeName = this.$refs.employeeName.getValue();
      this.data.DepartmentId = this.$refs.department.getValue();
      this.data.EmployeePosition = this.$refs.position.getValue();
      this.data.DateOfBirth = this.$refs.dateOfBirth.getValue();
      if (this.data.DateOfBirth == "") this.data.DateOfBirth = null;
      this.data.DateOfBirth = new Date(this.data.DateOfBirth);
      this.data.Gender = parseInt(this.$refs.gender.getValue());
      if (this.data.Gender == -1) {
        this.data.Gender = null;
      }
      this.data.IdentityNumber = this.$refs.identityNumber.getValue();
      this.data.IdentityDate = this.$refs.identityDate.getValue();
      if (this.data.IdentityDate == "") this.data.IdentityDate = null;
      this.data.IdentityDate = new Date(this.data.IdentityDate);
      this.data.IdentityPlace = this.$refs.identityPlace.getValue();
      this.data.Address = this.$refs.address.getValue();
      this.data.PhoneNumber = this.$refs.phoneNumber.getValue();
      this.data.TelephoneNumber = this.$refs.telephoneNumber.getValue();
      this.data.Email = this.$refs.email.getValue();
      this.data.BankAccountNumber = this.$refs.bankAccountNumber.getValue();
      this.data.BankName = this.$refs.bankName.getValue();
      this.data.BankBranchName = this.$refs.bankBranchName.getValue();
    },
    async saveForm() {
      this.getFormData();
      console.log(JSON.stringify(this.data));
      if (this.editMode == "add") {
        await EmployeeApi.add(JSON.stringify(this.data))
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              if (response.data.Success == true) {
                alert("Đã thêm " + response.data.Data + " bản ghi!");
                this.$emit("reloadData");
                this.$emit("closeForm");
              } else {
                alert(response.data.UserMsg);
              }
            } else {
              alert("Thao tác không thành công!" + response);
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
      if (this.editMode == "edit") {
        this.data.EmployeeId = this.formData.EmployeeId;
        await EmployeeApi.update(JSON.stringify(this.data))
          .then((response) => {
            console.log(response);
            if (response.status == 200) {
              if (response.data.Success == true) {
                alert("Đã sửa " + response.data.Data + " bản ghi!");
                this.$emit("reloadData");
                this.$emit("closeForm");
              } else {
                alert(response.data.UserMsg);
              }
            } else {
              alert("Thao tác không thành công!" + response);
            }
          })
          .catch((error) => {
            console.log(error.response);
          });
      }
    },
    changeValue(id, newValue) {
      switch (id) {
        case "department":
          this.formData.DepartmentName = newValue;
          break;
      }
    },
  },
  mounted() {
    this.focusEmployeeCode();
    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        this.$emit("closeForm");
      }
    });
  },
};
</script>

<style scoped>
@import url("../../../css/views/dictionary/employee/employee-detail.css");
</style>