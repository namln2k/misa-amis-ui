import BaseApi from "./BaseApi";
import Repository from "./Repository";

class EmployeeApi extends BaseApi {
    constructor() {
        super();
        this.controler = "Employees";
    }
    getNewEmployeeCode() {
        return Repository.get(`${this.controler}/new-employee-code`);
    }
    getEmployeesFilterPaging(parameters) {
        let config = {
            params: parameters,
        };
        return Repository.get(`${this.controler}/filter-paging`, config);
    }
}

export default new EmployeeApi();