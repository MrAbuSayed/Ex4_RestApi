const app = require("./app");

const PORT=2024;

app.listen(PORT,()=>{
    console.log(`The Rest Api Server is running on http://localhost:${PORT}`);
});