const database = require("./connection");
const fs = require("fs");
const path = require("path");

const initFilePath = path.join(__dirname, "init.sql");
const initFile = fs.readFileSync(initFilePath, "utf-8");

const buildDatabase = () => {
  return database
    .query(initFile)
    .then(() => {
      console.log("Database Reset and Built");
      database.end();
    })
    .catch((error) => error);
};

if (require.main === module) {
  buildDatabase();
}

module.exports = buildDatabase;
