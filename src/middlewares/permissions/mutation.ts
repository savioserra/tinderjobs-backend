import sharedRules from "./shared";

export const Mutation = {
  like: sharedRules.isAuthenticatedUser
};
