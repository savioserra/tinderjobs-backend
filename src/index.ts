// tslint:disable no-console

import { GraphQLServer, PubSub } from "graphql-yoga";
import { Prisma } from "./prisma";
import { typeDefs } from "./typeDefs";

import { permissions } from "./middlewares/permissions";
import resolvers from "./resolvers";
import { appSecret } from "./utils";

const prismaEndpoint = `${process.env.PRISMA_SERVER_ENDPOINT}/${process.env.APP_NAME}/${process.env.STAGE}`;

const port = process.env.PORT || 4000;
const debug = process.env.DEBUG === "true";
const tracing = process.env.TRACING === "true";

export const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  middlewares: [permissions],
  context: req => ({
    ...req,
    pubsub,
    prisma: new Prisma({
      endpoint: prismaEndpoint,
      secret: appSecret,
      debug
    })
  })
});

server.start({ port, deduplicator: true, tracing }, () => console.log(`Server is running!`));
