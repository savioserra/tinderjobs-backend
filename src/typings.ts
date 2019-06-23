import { GraphQLResolveInfo } from "graphql";
import { Prisma } from "./prisma";

export type Resolver<ReturnType, RootType = any> = (root: RootType, args: any, ctx: { prisma: Prisma }, info: GraphQLResolveInfo) => Promise<ReturnType>;
