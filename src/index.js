vonst express = require('express');
const app = express();

app.get("/", (req, res) => {
  res.send("Hola Clase");
});

app.listen(3000);
  
