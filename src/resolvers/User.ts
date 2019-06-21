import { Match } from "../prisma";
import { Resolver } from "../typings";
import { getUserId } from "../utils";

const matches: Resolver<Match[]> = async (root, args, context, info) => {
  const usedId = getUserId(context);

  return context.prisma.query.matches({
    where: { like: { user: { id: usedId } } }
  });
};

export const User = {
  matches
};
