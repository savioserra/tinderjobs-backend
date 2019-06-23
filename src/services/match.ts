import { Like, Prisma } from "../prisma";

export class MatchService {
  public static async createMatch(like: Like, { prisma }: { prisma: Prisma }): Promise<boolean> {
    const [match] = await prisma.query.matches({
      where: { like: { id: like.id } },
      first: 1
    });

    if (!match) {
      const createdMatch = await prisma.mutation.createMatch({
        data: { like: { connect: { id: like.id } } }
      });

      return Boolean(createdMatch);
    }

    return false;
  }
}
