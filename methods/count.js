export const count = async (driver) => {
  try {
    const result = await driver.count({});
    return result;
  } catch (error) {
    console.log(error);
  }
};
