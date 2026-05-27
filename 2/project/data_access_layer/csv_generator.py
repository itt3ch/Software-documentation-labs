import csv
import random

from faker import Faker

fake = Faker()

departments = [
    "HR",
    "Finance",
    "IT",
    "Marketing",
    "Sales"
]

positions = [
    "Manager",
    "Analyst",
    "Developer",
    "Specialist",
    "Coordinator"
]

countries = [
    "USA",
    "Canada",
    "Germany",
    "Poland",
    "Ukraine"
]


class CsvGenerator:

    def generate_csv(self):

        with open("employees.csv", "w", newline="", encoding="utf-8") as file:

            writer = csv.writer(file)

            writer.writerow([
                "employee_name",
                "email",
                "department",
                "position",
                "salary",
                "country"
            ])

            for _ in range(1000):

                writer.writerow([
                    fake.name(),
                    fake.unique.email(),
                    random.choice(departments),
                    random.choice(positions),
                    round(random.uniform(1000, 10000), 2),
                    random.choice(countries)
                ])

        return "employees.csv"