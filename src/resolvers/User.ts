import { City, Company, Job, Match, Skill, User as UserType } from "../prisma";
import { JobService } from "../services/job";
import { Resolver } from "../typings";
import { getUserId } from "../utils";

const matches: Resolver<Match[], UserType> = async (root, args, context) => {
  const usedId = getUserId(context);

  return context.prisma.query.matches({
    where: { like: { candidate: { id: usedId } } }
  });
};

const availableJobs: Resolver<Job[], UserType> = async (root, { page, perPage }, ctx) => {
  return JobService.getAvailableJobs(root.id, page, perPage, ctx.prisma);
};

const city: Resolver<City, UserType> = async (root, args, { prisma }) => {
  const [userCity] = await prisma.query.cities({ where: { users_every: { id: root.id } }, first: 1 });

  return userCity;
};

const company: Resolver<Company, UserType> = async (root, args, { prisma }) => {
  const [userCompany] = await prisma.query.companies({ where: { users_every: { id: root.id } }, first: 1 });

  return userCompany;
};

const skills: Resolver<Skill[], UserType> = async (root, args, { prisma }) => {
  return prisma.query.skills({ where: { users_every: { id: root.id } } });
};

const managedJobs: Resolver<Job[], UserType> = async (root, args, { prisma }) => {
  return prisma.query.jobs({ where: { manager: { id: root.id } } });
};

export const User = {
  matches,
  availableJobs,
  city,
  company,
  skills,
  managedJobs
};
