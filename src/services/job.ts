import { Job, Prisma, User } from "../prisma";

export class JobService {
  public static async getAvailableJobs(userId: string, prisma: Prisma): Promise<Job[]> {
    const user = await prisma.query.user({ where: { id: userId } }, "{ id city { name } skills { id } }");
    const jobs = await prisma.query.jobs(
      { where: { city: { name: user.city.name }, status: { name: "active" } } },
      "{ title matchThreshold description weekHours weekDays remuneration createdAt updatedAt deleted id skills { id } }"
    );

    return jobs.filter(j => this.getCompactibility(user, j) >= j.matchThreshold);
  }

  public static getCompactibility(user: User, job: Job): number {
    const userSkills = user.skills.map(s => s.id);
    const jobSkills = job.skills.map(s => s.id);

    const filteredSkills = userSkills.filter(id => jobSkills.includes(id));

    return filteredSkills.length / jobSkills.length || 1;
  }
}
