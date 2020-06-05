import express from 'express';
import cors from 'cors';
// Serve para trabalhar com diretorios de maneira simplificada
import path from 'path';
import routes from './routes';
const app = express();

app.use(cors());
// Isso aqui adiciona um plugin no express para que possa entender o formato json
app.use(express.json());
// Acessando imagens
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);



app.listen(3333);