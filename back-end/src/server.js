
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 82;

app.listen(port, ()=>{
    console.log("API iniciada...")
    console.log(" - API online no endpoint http://localhost:82")
})
