import { faker } from "@faker-js/faker";

export const insertMany = async (driver) => {
  try {
    const numDocuments = 1;

    const documents = Array.from({ length: numDocuments }, () => ({
      name: faker.name.fullName(),
      age: faker.datatype.number({ min: 18, max: 99 }),
    }));

    const result = await driver.insertMany(documents);
    return result;
  } catch (error) {
    console.log(error);
  }
};
