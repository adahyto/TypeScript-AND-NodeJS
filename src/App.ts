import * as express from "express";

class App {
  public express;

  constructor() {
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    const router = express.Router();
    router.get("/", (req, res) => {
      res.json({
        name: "NodeJS&TypeScript",
        message: "enjoy"
      });
    });
    router.post("/", (req, res) => {
      res.json({
        req: "POST",
        status: "working"
      });
    });

    this.express.use("/", router);
  }
}

export default new App().express;
