from data_access_layer.database import Base, engine

from data_access_layer.repository import SqlAlchemyRepository
from data_access_layer.csv_reader import CsvReader
from data_access_layer.csv_generator import CsvGenerator

from business_layer.services import DataImportService


def main():

    Base.metadata.create_all(bind=engine)

    repository = SqlAlchemyRepository()

    csv_reader = CsvReader()

    csv_generator = CsvGenerator()

    service = DataImportService(
        repository=repository,
        csv_reader=csv_reader,
        csv_generator=csv_generator
    )

    service.import_data()

    print("1000 employees inserted into database!")


if __name__ == "__main__":
    main()