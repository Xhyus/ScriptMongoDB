export const find = async (driver) => {
  try {
    const result = await driver.find({});
    return result.toArray();
  } catch (error) {
    console.log(error);
  }
};
