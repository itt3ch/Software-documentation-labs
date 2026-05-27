from business_layer.interfaces import IDataImporter


class DataImportService(IDataImporter):

    def __init__(self, repository, csv_reader, csv_generator):

        self.repository = repository
        self.csv_reader = csv_reader
        self.csv_generator = csv_generator

    def import_data(self):

        filename = self.csv_generator.generate_csv()

        data = self.csv_reader.read_csv(filename)

        cleaned_data = []

        for row in data:

            cleaned_data.append({
                "employee_name": row["employee_name"],
                "email": row["email"],
                "department": row["department"],
                "position": row["position"],
                "salary": row["salary"],
                "country": row["country"]
            })

        self.repository.save_data(cleaned_data)