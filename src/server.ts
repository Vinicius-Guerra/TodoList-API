import { app } from "./app";

const port = 3000;

app.listen(port, () => {
    console.log(`API suceesfully at port ${port}`);
});