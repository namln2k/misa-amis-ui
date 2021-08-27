<template>
  <div class="content">
    <BaseLoading v-if="this.isLoading"></BaseLoading>
    <EmployeeDetail
      v-if="this.isFormShown"
      @closeForm="closeForm"
      @cancelForm="cancelForm"
      @reloadData="loadData"
      :departmentData="this.departmentData"
      :formData="this.formData"
      ref="employeeForm"
      :editMode="this.editMode"
    ></EmployeeDetail>
    <div class="content-header">
      Nhân viên
      <div class="header-right"></div>
      <BaseButton
        text="Thêm mới nhân viên"
        @click.native="showNewForm"
      ></BaseButton>
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
      <div class="grid-table">
        <div class="table-container">
          <table class="table-viewer">
            <thead class="table-header">
              <tr>
                <td>
                  <input type="checkbox" v-model="selectAll" />
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
            <tbody class="table-body">
              <tr
                v-for="employee in employees"
                :key="employee.EmployeeId"
                :class="{ 'tr-active': employee.checked }"
              >
                <td>
                  <input type="checkbox" v-model="employee.checked" />
                </td>
                <td>{{ employee.EmployeeCode }}</td>
                <td>{{ employee.EmployeeName }}</td>
                <td>{{ employee.GenderName }}</td>
                <td>{{ employee.DateOfBirth }}</td>
                <td>{{ employee.IdentityNumber }}</td>
                <td>{{ employee.EmployeePosition }}</td>
                <td>{{ employee.DepartmentName }}</td>
                <td>{{ employee.BankAccountNumber }}</td>
                <td>{{ employee.BankName }}</td>
                <td>{{ employee.BankBranchName }}</td>
                <td class="function-cell">
                  <div class="function">
                    <div @click="editEmployee(employee.EmployeeId)" class="function-text">Sửa</div>
                    <div class="function-arrow">
                      <div class="arrow-icon"></div>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="table-pagination">
        <div class="pagination-left">
          <p>
            Tổng số:
            <span style="font-weight: bold"> {{ totalRecord }} </span>
            bản ghi
          </p>
        </div>
        <div class="pagination-right">
          <div style="width: 200px; height: 32px; margin-right: 20px">
            <BaseDropdown
              :selectedOption="selectedDisplayOption"
              :options="displayOptions"
              @changeOption="changeDisplayOption"
            ></BaseDropdown>
          </div>
          <BasePagination
            :total-pages="this.totalPage"
            :total="this.totalRecord"
            :per-page="10"
            :current-page="this.currentPage"
            @pagechanged="onPageChange"
          ></BasePagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../../components/base/BaseButton.vue";
import EmployeeApi from "../../../api/EmployeeApi";
import Utils from "../../../scripts/utils";
import DepartmentApi from "../../../api/DepartmentApi";
import BaseLoading from "../../../components/base/BaseLoading.vue";
import BaseDropdown from "../../../components/base/BaseDropdown.vue";
import BasePagination from "../../../components/base/BasePagination.vue";
import EmployeeDetail from "../employee/EmployeeDetail.vue";
import Employee from "../../../scripts/employee";

export default {
  name: "EmployeeList",
  components: {
    BaseButton,
    BaseLoading,
    BaseDropdown,
    BasePagination,
    EmployeeDetail,
  },
  data() {
    return {
      isLoading: false,
      isFormShown: false,
      editMode: "add",
      utils: Object,
      departmentData: [],
      newEmployeeCode: "",
      formData: {
        EmployeeCode: "",
        EmployeeName: "",
        DepartmentName: "",
        EmployeePosition: "",
        DateOfBirth: "",
        Gender: -1,
        IdentityNumber: "",
        IdentityDate: "",
        IdentityPlace: "",
        Address: "",
        PhoneNumber: "",
        TelephoneNumber: "",
        Email: "",
        BankAccountNumber: "",
        BankName: "",
        BankBranchName: "",
      },
      selectedDisplayOption: "10 bản ghi",
      displayOptions: [
        { value: 10, text: "10 bản ghi" },
        { value: 20, text: "20 bản ghi" },
        { value: 30, text: "30 bản ghi" },
        { value: 40, text: "40 bản ghi" },
        { value: 50, text: "50 bản ghi" },
      ],
      pageSize: 10,
      currentPage: 1,
      employees: [],
      totalRecord: 0,
      totalPage: 0,
      selectAll: false,
    };
  },
  created() {
    this.utils = new Utils();
    this.getNewEmployeeCode();
    this.getDepartmentData();
    this.getEmployeesFilterPaging(this.currentPage, this.pageSize);
  },

  methods: {
    // Lấy danh sách nhân viên từ backend
    async getEmployeesFilterPaging(currentPage, pageSize) {
      this.isLoading = true;
      let params = {
        employeeFilter: "",
        pageIndex: currentPage,
        pageSize: pageSize,
      };
      await EmployeeApi.getEmployeesFilterPaging(params)
        .then((response) => {
          this.employees = [];
          let employeeList = response.data.Employees;
          employeeList.forEach((employee) => {
            employee.DateOfBirth = this.utils.FormatDateDDMMYYYY(
              employee.DateOfBirth
            );
            employee.GenderName = this.utils.GetGenderName(employee.Gender);
            employee.DepartmentName = this.utils.GetDepartmentName(
              employee.DepartmentId,
              this.departmentData
            );
            employee.checked = false;
            this.employees.push(employee);
            this.totalRecord = response.data.TotalRecord;
            this.totalPage = response.data.TotalPage;
          });
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },

    // Lấy dữ liệu phòng ban và bỏ vào data của component
    async getDepartmentData() {
      this.isLoading = true;
      await DepartmentApi.getAll().then((response) => {
        this.departmentData = [];
        response.data.forEach((d) => {
          let dep = {};
          dep.text = d.DepartmentName;
          dep.value = d.DepartmentId;
          this.departmentData.push(dep);
        });
      });
    },

    // Láy mã nhân viên mới
    async getNewEmployeeCode() {
      await EmployeeApi.getNewEmployeeCode().then((response) => {
        this.newEmployeeCode = response.data;
      });
    },

    // Lấy dữ liệu
    loadData() {
      this.getNewEmployeeCode();
      this.getDepartmentData();
      this.getEmployeesFilterPaging(this.currentPage, this.pageSize);
    },

    changeDisplayOption(option) {
      this.selectedDisplayOption = option.text;
      this.pageSize = this.displayOptions.find((opt) => {
        return opt.text == this.selectedDisplayOption;
      }).value;
      this.getEmployeesFilterPaging(this.currentPage, this.pageSize);
    },

    onPageChange(page) {
      this.currentPage = page;
      this.getEmployeesFilterPaging(this.currentPage, this.pageSize);
    },

    showNewForm() {
      this.formData = new Employee();
      this.formData.EmployeeCode = this.newEmployeeCode;
      this.isFormShown = true;
    },

    closeForm() {
      this.getNewEmployeeCode();
      this.getEmployeesFilterPaging(this.currentPage, this.pageSize);
      this.isFormShown = false;
    },

    cancelForm() {
      this.isFormShown = false;
    },

    async editEmployee(employeeId) {
      console.log(employeeId);
      this.editMode = "edit"
      await EmployeeApi.getById(employeeId).then(response => {
        let employee = response.data;
        if (employee != null) {
          console.log(employee);
          this.formData = employee;
          this.formData.DepartmentName = this.departmentData.find(opt => {
            return opt.value == this.formData.DepartmentId;
          }).text;
          this.formData.DateOfBirth = this.utils.FormatDateYYYYMMDD(this.formData.DateOfBirth);
          this.formData.IdentityDate = this.utils.FormatDateYYYYMMDD(this.formData.IdentityDate);
        }
      });
      this.isFormShown = true;
    }
  },
};
</script>

<style scoped>
@import url("../../../css/views/dictionary/employee/employee-list.css");
</style>