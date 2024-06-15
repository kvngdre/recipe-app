const app = require("./app");
const logger = require("./utils/logger");
const config = require("./utils/config");
const connectMongoDB = require("./db/mongoDB");

app.listen(config.PORT, () => {
  connectMongoDB();
  logger.info(`Server ready and running on port: ${config.PORT}`);
});
