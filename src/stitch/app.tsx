import { Stitch } from "mongodb-stitch-browser-sdk";

const APP_ID = "cersstitch-xxofl";

const app = Stitch.hasAppClient(APP_ID)
  ? Stitch.getAppClient(APP_ID)
  : Stitch.initializeAppClient(APP_ID);

export { app };
