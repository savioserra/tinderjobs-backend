import { Company, Job as JobType } from "../prisma";
import { Resolver } from "../typings";

const company: Resolver<Company, JobType> = async (root, args, context) => {
  const [jobcompany] = await context.prisma.query.companies({ where: { jobs_some: { id: root.id } }, first: 1 });

  return jobcompany;
};

const tags: Resolver<string[], JobType> = async (root, args, context) => {
  const job = await context.prisma.query.job({ where: { id: root.id } });

  return JSON.parse(job.tags);
};

export const Job = {
  company,
  tags
};
