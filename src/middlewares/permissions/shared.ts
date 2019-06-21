import { rule } from "graphql-shield";
import { getUserId } from "../../utils";

const shared = {
  isAuthenticatedUser: rule()((parent, args, context) => {
    const userId = getUserId(context);

    return Boolean(userId);
  })
};

export default shared;
