export const findOne = async (driver) => {
  try {
    const result = await driver.findOne({});
    return result;
  } catch (error) {
    console.log(error);
  }
};
