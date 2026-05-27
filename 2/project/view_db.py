from tabulate import tabulate

from data_access_layer.database import SessionLocal
from data_access_layer.models import Employee


def main():

    session = SessionLocal()

    employees = session.query(Employee).all()

    table = []

    for employee in employees[:30]:

        table.append([
            employee.id,
            employee.employee_name,
            employee.email,
            employee.department,
            employee.position,
            employee.salary,
            employee.country
        ])

    print(tabulate(
        table,
        headers=[
            "ID",
            "NAME",
            "EMAIL",
            "DEPARTMENT",
            "POSITION",
            "SALARY",
            "COUNTRY"
        ],
        tablefmt="grid"
    ))

    session.close()


if __name__ == "__main__":
    main()