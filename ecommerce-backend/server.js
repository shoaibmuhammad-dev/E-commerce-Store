const app = require("./app");
const connectDB = require("./config/db");
const PORT = 1800;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Failed to connect to DB `, error);
    process.exit(1);
  });
