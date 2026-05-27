from sqlalchemy import Column, Integer, String, Float
from data_access_layer.database import Base


class Employee(Base):

    __tablename__ = "employees"

    id = Column(Integer, primary_key=True)

    employee_name = Column(String)
    email = Column(String, unique=True)
    department = Column(String)
    position = Column(String)
    salary = Column(Float)
    country = Column(String)