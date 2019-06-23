import { compare, hash } from "bcryptjs";
import { GraphQLError } from "graphql";
import { sign } from "jsonwebtoken";

import { User } from "../../prisma";
import { Resolver } from "../../typings";
import { appSecret } from "../../utils";

interface AuthPayload {
  token?: string;
  user?: User;
  info: string;
}

const signUp: Resolver<AuthPayload> = async (_, { email, password, avatarUrl, city }, { prisma }) => {
  const emailInUse = await prisma.exists.User({ email });

  if (emailInUse) {
    return {
      info: "Email already in use!"
    };
  }

  const hashedPassword = await hash(password, 10);

  const user = await prisma.mutation.createUser({
    data: { email, password: hashedPassword, avatarUrl, rating: 4.2, city: { connect: { name: city } } }
  });

  return {
    token: sign({ userId: user.id }, appSecret),
    info: "Usuário criado com sucesso.",
    user
  };
};

const login: Resolver<AuthPayload> = async (_, { email, password }, { prisma }) => {
  const hashedPassword = await hash(password, 10);
  const user = await prisma.query.user({ where: { email } });

  if (!user || !(await compare(password, hashedPassword))) {
    throw new GraphQLError("Credenciais inválidas!");
  }

  return {
    token: sign({ userId: user.id }, appSecret),
    info: "Logado.",
    user
  };
};

export default {
  signUp,
  login
};
