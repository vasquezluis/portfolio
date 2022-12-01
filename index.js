import { PORT } from "./server/config.js";

import app from "./server/app.js";

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
