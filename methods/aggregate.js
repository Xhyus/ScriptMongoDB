export const aggregate = async (driver) => {
  try {
    const result = await driver.aggregate([
      {
        $match: {
          isAdmin: true,
        },
      },
      {
        $group: {
          _id: "$isAdmin",
          count: {
            $sum: 1,
          },
        },
      },
    ]);
    return result.toArray();
  } catch (error) {
    console.log(error);
  }
};
