import { faker } from "@faker-js/faker";
import { config } from "../config.js";
export const populate = async (driver) => {
  try {
    const configData = config().data;
    const data = [];
    for (let i = 0; i < configData.populate; i++) {
      let fakeData = {
        creationDate: faker.date.past(),
        createBy: faker.name.lastName(),
        modDate: faker.date.recent(),
        modBy: faker.name.lastName(),
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        numericId: i + 1,
        isAdmin: i % 2 === 0,
      };

      data.push(fakeData);
    }
    console.log(data);
    return await driver.insertMany(data);
  } catch (error) {
    console.log(error);
  }
};
