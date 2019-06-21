import { compare, hash } from "bcryptjs";
import { GraphQLError } from "graphql";
import { sign } from "jsonwebtoken";

import { User } from "../../prisma";
import { Resolver } from "../../typings";
import { appSecret, retry } from "../../utils";

interface AuthPayload {
  token: string;
  user: User;
}

const signUp: Resolver<AuthPayload> = async (_, { email, password, avatarUrl }, { prisma }) => {
  const hashedPassword = await hash(password, 10);

  const user = await prisma.mutation.createUser({
    data: { email, password: hashedPassword, avatarUrl, rating: 4.2 }
  });

  return {
    token: sign({ userId: user.id }, appSecret),
    user
  };
};

export default {
  signUp
};
