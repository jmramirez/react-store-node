import express from 'express';
import errorsMiddleware from './middlewares/errors';
import logger from 'morgan';
import environment from './config/environment';
import apiRoutes from './controllers';
import cors from 'cors'
import helmet from "helmet";

export default class App {
  constructor() {
    this.app = express();
    this.app.use(
      logger('dev', { skip: (req, res) => environment.env === 'test' })
    );
    this.app.use(helmet({ contentSecurityPolicy: false}))
    this.app.use(cors())
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.get('/', (req, res) => {
      res.send('Hello world');
    });
    this.setRoutes();
  }

  setRoutes() {
    this.app.use('/api', apiRoutes);
    this.app.use(errorsMiddleware);
  }

  getApp() {
    return this.app;
  }

  listen() {
    const { port } = environment;
    this.app.listen(port, () => {
      console.log(`Listening on port: ${port}`);
    });
  }
}
