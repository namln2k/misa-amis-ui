import BaseApi from "./BaseApi";

class DepartmentApi extends BaseApi {
    constructor() {
        super();
        this.controler = "Departments";
    }
}

export default new DepartmentApi();