import { Job, User } from "../../prisma";
import { Resolver } from "../../typings";
import { getUserId } from "../../utils";

const me: Resolver<User> = async (root, args, ctx, info) => {
  const id = getUserId(ctx);

  return ctx.prisma.query.user({ where: { id } });
};

export default {
  me
};
