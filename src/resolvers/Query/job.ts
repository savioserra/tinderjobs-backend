import { Job, User } from "../../prisma";
import { JobService } from "../../services/job";
import { Resolver } from "../../typings";
import { getUserId } from "../../utils";

const jobs: Resolver<Job[]> = async (root, args, ctx, info) => {
  const userId = getUserId(ctx);

  return JobService.getAvailableJobs(userId, ctx.prisma);
};

export default {
  jobs
};
