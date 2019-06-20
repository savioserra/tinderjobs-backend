import { rule } from "graphql-shield";
import { getUserId } from "../../utils";

const rules = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);

    return Boolean(userId);
  })
};

export const Query = rules.isAuthenticatedUser;
