import { pubsub } from "../../index";

let count = 0;
const channel = "teste";

setInterval(() => {
  pubsub.publish(channel, count);
  count = count + 1;
}, 2000);

export default {
  count: {
    subscribe: async (root, args, { pubsub }) => {
      return pubsub.asyncIterator(channel);
    },

    resolve: data => data
  }
};
