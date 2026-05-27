const employeeModel = require("../models/employeeModel");

class EmployeeService {

    getEmployees(callback) {
        employeeModel.getAll(callback);
    }

    getEmployee(id, callback) {
        employeeModel.getById(id, callback);
    }

    createEmployee(data, callback) {

        if (!data.employee_name || !data.email) {
            throw new Error("Invalid employee data");
        }

        employeeModel.create(data, callback);
    }

    updateEmployee(id, data, callback) {
        employeeModel.update(id, data, callback);
    }

    deleteEmployee(id, callback) {
        employeeModel.delete(id, callback);
    }
}

module.exports = new EmployeeService();