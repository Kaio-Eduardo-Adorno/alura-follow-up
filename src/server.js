import express from 'express';
import { CriaContaRequest } from './http/cria-conta.request.js';
const app = express();
const port = 4000;

app.use(express.json());

app.post('/conta', new CriaContaRequest().executa);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});