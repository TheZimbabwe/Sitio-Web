npm install express
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Servir archivos estáticos
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});