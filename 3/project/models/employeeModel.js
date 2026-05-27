const db = require("../database/db");

class EmployeeModel {

    getAll(callback) {

        db.all(
            "SELECT * FROM employees",
            [],
            (err, rows) => {

                if (err) {
                    console.log(err);
                }

                callback(rows);
            }
        );
    }

    getById(id, callback) {

        db.get(
            "SELECT * FROM employees WHERE id = ?",
            [id],
            (err, row) => {

                if (err) {
                    console.log(err);
                }

                callback(row);
            }
        );
    }

    create(data, callback) {

        db.run(
            `
            INSERT INTO employees
            (employee_name, email, department, position, salary, country)
            VALUES (?, ?, ?, ?, ?, ?)
            `,
            [
                data.employee_name,
                data.email,
                data.department,
                data.position,
                data.salary,
                data.country
            ],
            callback
        );
    }

    update(id, data, callback) {

        db.run(
            `
            UPDATE employees
            SET employee_name = ?,
                email = ?,
                department = ?,
                position = ?,
                salary = ?,
                country = ?
            WHERE id = ?
            `,
            [
                data.employee_name,
                data.email,
                data.department,
                data.position,
                data.salary,
                data.country,
                id
            ],
            callback
        );
    }

    delete(id, callback) {

        db.run(
            "DELETE FROM employees WHERE id = ?",
            [id],
            callback
        );
    }
}

module.exports = new EmployeeModel();