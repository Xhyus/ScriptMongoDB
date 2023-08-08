import { faker } from "@faker-js/faker";

export const insertOne = async (driver) => {
  try {
    const result = await driver.insertOne({
      name: faker.name.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
