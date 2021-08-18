import moment from 'moment'

// Lớp chứa các util dùng chung
class Utils {
    constructor() {
        this.genderData = [
            { text: "Nữ", value: 0 },
            { text: "Nam", value: 1 },
            { text: "Khác", value: 2 },
        ];
    }

    // Định dạng ngày theo DD/MM/YYYY
    FormatDateDDMMYYYY(date) {
        let formatedDate = moment(date).format('L');
        if (formatedDate == "Invalid date")
            return "";
        return formatedDate;
    }

    // Lấy giá trị GenderName theo GenderValue
    GetGenderName(genderValue) {
        if (genderValue == null)
            return ""
        return this.genderData.find(opt => {
            return opt.value == genderValue;
        }).text;
    }

    // Lấy giá trị DepartmentData theo DepartmentValue
    GetDepartmentName(departmentValue, departmentData) {
        if (departmentValue == null)
            return ""
        return departmentData.find(opt => {
            return opt.value == departmentValue;
        }).text;
    }
}

export { Utils }