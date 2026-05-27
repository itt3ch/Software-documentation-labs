const employeeService = require("../business_layer/employeeService");

class EmployeeController {

    dashboard(req, res) {

        employeeService.getEmployees((employees) => {

            res.render("dashboard", { employees });

        });
    }

    addPage(req, res) {

        res.render("add-employee");
    }

    create(req, res) {

        employeeService.createEmployee(req.body, () => {

            res.redirect("/");
        });
    }

    editPage(req, res) {

        employeeService.getEmployee(
            req.params.id,
            (employee) => {

                res.render("edit-employee", { employee });

            }
        );
    }

    update(req, res) {

        employeeService.updateEmployee(
            req.params.id,
            req.body,
            () => {

                res.redirect("/");

            }
        );
    }

    delete(req, res) {

        employeeService.deleteEmployee(
            req.params.id,
            () => {

                res.redirect("/");

            }
        );
    }
}

module.exports = new EmployeeController();