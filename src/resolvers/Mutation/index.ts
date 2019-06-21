import auth from "./auth";
import like from "./like";

const Mutation = {
  ...auth,
  ...like
};

export default Mutation;
