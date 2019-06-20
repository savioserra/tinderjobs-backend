import { shield } from "graphql-shield";
import { Mutation } from "./mutation";
import { Query } from "./query";

export const permissions = shield(
  {
    Mutation,
    Query
  },
  {
    allowExternalErrors: true,
    debug: true
  }
);
