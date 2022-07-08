const express = require("express");

const routes = require("./routes");
const db = require("./database/data");
const handleError = require("./middlewares/errorHandler");
 //faz a requisição do auth do token jwt
const authMiddlewares = require("./middlewares/auth");

const app = express();

db.hasConnection();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authMiddlewares.unless({ path: ["/precadastro"]}));
//no unless são especificadas as rotas que o middleware irá ignorar

app.use(routes);
app.use(handleError);

 app.listen(port, () => {
  console.log(`Servidor executando na porta: ${port}`);
}); 