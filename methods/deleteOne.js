export const deleteOne = async (driver) => {
  try {
    const result = await driver.deleteOne({});
    return result;
  } catch (error) {
    console.log(error);
  }
};
