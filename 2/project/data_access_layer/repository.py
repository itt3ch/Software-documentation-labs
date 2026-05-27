from data_access_layer.interfaces import IRepository
from data_access_layer.database import SessionLocal
from data_access_layer.models import Employee


class SqlAlchemyRepository(IRepository):

    def save_data(self, data):

        session = SessionLocal()

        for row in data:

            existing_employee = session.query(Employee).filter_by(
                email=row["email"]
            ).first()

            if not existing_employee:

                employee = Employee(
                    employee_name=row["employee_name"],
                    email=row["email"],
                    department=row["department"],
                    position=row["position"],
                    salary=float(row["salary"]),
                    country=row["country"]
                )

                session.add(employee)

        session.commit()
        session.close()