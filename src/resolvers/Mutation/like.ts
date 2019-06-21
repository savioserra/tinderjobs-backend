import { Like } from "../../prisma";
import { Resolver } from "../../typings";
import { getUserId } from "../../utils";

interface LikePayload {
  success: boolean;
  info: string;
}

const like: Resolver<LikePayload> = async (_, { jobId }, context) => {
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

  const alreadyLiked = await context.prisma.exists.Job({ id: jobId, like: { user: { id: userId } } });

  if (alreadyLiked) {
    return {
      success: false,
      info: "Você já deu like nesta vaga."
    };
  }

  const createdLike = await context.prisma.mutation.createLike({
    data: { job: { connect: { id: jobId } }, user: { connect: { id: userId } } }
  });

  return {
    success: !!createdLike,
    info: createdLike ? "Like realizado." : "Um erro inesperado ocorreu."
  };
};

export default {
  like
};
