import express, { Router } from 'express';
import cors from 'cors';


interface Options {
  port: number;
  routes: Router;
}

const corsOptions: cors.CorsOptions = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'OPTIONS', 'PATCH'],
  credentials: true,
  optionsSuccessStatus: 204,
  allowedHeaders: ['Content-Type', 'Authorization'],
};



export class Server {

  public readonly app = express();
  public readonly port: number;
  public readonly routes: Router;

  constructor( options: Options ) {

    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {

    // Middlewares
    this.app.use( express.json() );
    this.app.use( express.urlencoded({ extended: true }) );

    this.app.use( cors( corsOptions ) );

    // Routes
    this.app.use( this.routes );

    // Server Listen
    this.app.listen( this.port, () => {
      console.log( `Server running on port ${this.port}` );
    });
  }
}


