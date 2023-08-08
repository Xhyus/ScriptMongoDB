export const countDocuments = async (driver) => {
  try {
    const result = await driver.countDocuments({});
    return result;
  } catch (error) {
    console.log(error);
  }
};
