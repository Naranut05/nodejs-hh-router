import express from "express";
import bodyParser from "body-parser";
import accountsRouter from "./data/routes/accounts.js";
import assignmentsRouter from "./data/routes/assignments.js";
import commentsRouter from "./data/routes/assignmentComments.js";

const app = express();
const port = 4001;

app.use(express.json());
app.use(bodyParser.json());

app.use("/accounts", accountsRouter);
app.use("/assignments", assignmentsRouter);
app.use("/assignments/:id", commentsRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
