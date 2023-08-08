import fs from "fs";

export const config = () => {
  const data = fs.readFileSync("./config.json", "utf8");
  console.log({ data: JSON.parse(data) });
  return { data: JSON.parse(data) };
};
