import express from "express";

const app = express();

// Middlewares
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World");
});

const port = process.env.PORT || 4040;
app.listen(port, () =>
  console.log(`server started at http://localhost:${port}`)
);
