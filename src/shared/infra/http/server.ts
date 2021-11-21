import 'reflect-metadata';

import { ApolloServer } from 'apollo-server-express';

import express, { Request, Response, NextFunction } from 'express';

import cors from 'cors';

import AppError from '@shared/errors/AppError';

import '@shared/infra/typeorm';
import '@shared/Container';
import { schema } from '@modules/gateway/graphql';
import { createDataSources } from '@modules/gateway/data-sources';

async function init() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(
    (err: Error, request: Request, response: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return response.status(err.statusCode).json({
          status: 'error',
          message: err.message,
        });
      }
      console.log(err);

      return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
      });
    },
  );

  const server = new ApolloServer({
    schema,
    dataSources: createDataSources,
  });
  await server.start();

  server.applyMiddleware({ app });
  app.listen(3333, () => {
    console.log('Server started on port 3333');
  });
}

init();
