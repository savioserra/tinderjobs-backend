import { MatchService } from "../../services/match";
import { Resolver } from "../../typings";
import { getUserId } from "../../utils";

interface LikePayload {
  success: boolean;
  info: string;
}

const likeJob: Resolver<LikePayload> = async (_, { jobId }, context) => {
  const userId = getUserId(context);

  let jobExists;

  try {
    jobExists = await context.prisma.exists.Job({ id: jobId });
  } catch (error) {
    jobExists = false;
  }

  if (!jobExists) {
    return {
      success: false,
      info: "Vaga inválida."
    };
  }

  const [existingLike] = await context.prisma.query.likes({ where: { candidate: { id: userId }, job: { id: jobId } }, first: 1 });

  if (existingLike) {
    await MatchService.createMatch(existingLike, context);

    return {
      success: false,
      info: "Você já deu like nesta vaga."
    };
  }

  const createdLike = await context.prisma.mutation.createLike({
    data: { job: { connect: { id: jobId } }, candidate: { connect: { id: userId } } }
  });

  await MatchService.createMatch(createdLike, context);

  return {
    success: Boolean(createdLike),
    info: createdLike ? "Like realizado." : "Um erro inesperado ocorreu."
  };
};

const likeCandidate: Resolver<LikePayload> = async (_, { candidateId, jobId }, context) => {
  const jobManagerId = getUserId(context);

  let jobExists;

  try {
    jobExists = await context.prisma.exists.Job({ id: jobId });
  } catch (error) {
    jobExists = false;
  }

  if (!jobExists) {
    return {
      success: false,
      info: "Vaga inválida."
    };
  }

  const [existingLike] = await context.prisma.query.likes(
    {
      where: { job: { id: jobId }, candidate: { id: candidateId } },
      first: 1
    },
    "{ id candidate { id } manager { id } }"
  );

  if (existingLike && existingLike.manager !== null) {
    await MatchService.createMatch(existingLike, context);

    return {
      success: false,
      info: "Você já deu like neste candidato."
    };
  }

  const newLike = await context.prisma.mutation.createLike({
    data: { candidate: { connect: { id: candidateId } }, manager: { connect: { id: jobManagerId } }, job: { connect: { id: jobId } } }
  });

  await MatchService.createMatch(newLike, context);

  return {
    info: newLike ? "Like realizado." : "Um erro inesperado ocorreu.",
    success: Boolean(newLike)
  };
};

export default {
  likeJob,
  likeCandidate
};
