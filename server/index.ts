import { PORT } from "./config/config";
import app from "./app";
import dbConnect from "./config/mongodb";

// * database connection
dbConnect().then(() => {
  console.log("database connected");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
