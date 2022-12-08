//Importações
//----------------------------------------------------------------

import path from 'node:path'
//Importação do Express
import express, { application } from 'express';
//Importação do Mongoose
import mongoose from 'mongoose';

import { router } from './router';

//Initialize Database Connection
mongoose
  .connect('mongodb://127.0.0.1:27017')
  .then(() => {
    //Initialize Express
    const app = express();
    const port = 3001;


		app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', '*');
			res.setHeader('Access-Control-Allow-Headers', '*');

			next();
		})
		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json());
    app.use(router);

    app.listen(port, () => {
      console.log(`Server is listening on port http://localhost:${port}/`);
    });
  })
  .catch(() => console.log('Erro ao conectar ao mongo'));
