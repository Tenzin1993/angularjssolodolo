let express = require('express');
let app = express();

const PORT = 5000;

app.use(express.static('server/public'));

app.listen(PORT,() =>{
    console.log("listening to port", PORT);
});