import { faker } from "@faker-js/faker";

export const updateOne = async (driver) => {
  try {
    const result = await driver.updateOne(
      { email: "" },
      {
        $set: {
          name: faker.name.fullName(),
          email: faker.internet.email(),
          password: faker.internet.password(),
        },
      }
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};
