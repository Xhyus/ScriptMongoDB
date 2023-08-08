export const deleteMany = async (driver) => {
  try {
    const result = await driver.deleteMany({});
    return result;
  } catch (error) {
    console.log(error);
  }
};
