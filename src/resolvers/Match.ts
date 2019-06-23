import { Job } from "../prisma";
import { Resolver } from "../typings";
import { getUserId } from "../utils";

const job: Resolver<Job> = async (root, args, context, info) => {
  const usedId = getUserId(context);

  const [matchJob] = await context.prisma.query.jobs({
    where: { likes_every: { candidate: { id: usedId }, match: { id: root.id } } }
  });

  return matchJob;
};

export const Match = {
  job
};
