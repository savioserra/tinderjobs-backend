import { GraphQLResolveInfo } from "graphql";
import { Prisma } from "./prisma";

export type Resolver<T> = (root: any, args: any, ctx: { prisma: Prisma }, info: GraphQLResolveInfo) => Promise<T>;
