import sharedRules from "./shared";

export const Mutation = {
  likeJob: sharedRules.isAuthenticatedUser
};
