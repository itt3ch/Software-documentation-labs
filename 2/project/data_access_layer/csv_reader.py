import csv


class CsvReader:

    def read_csv(self, filename):

        data = []

        with open(filename, newline="", encoding="utf-8") as file:

            reader = csv.DictReader(file)

            for row in reader:
                data.append(row)

        return data