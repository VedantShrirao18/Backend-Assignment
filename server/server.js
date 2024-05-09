const express = require(`express`)
const app = express();
const assistantRoutes = require("./src/assistant/routes")
const port = 3001;

app.use(express.json())
app.use("/assistant",assistantRoutes)

app.listen(port,()=>{
    console.log(`app listening on port ${port}`)
})