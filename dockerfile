FROM node:11.3-alpine

RUN yarn global add prisma@1.32.2 graphql-cli

WORKDIR /app/tinderjobs

COPY package.json /app/tinderjobs/package.json
RUN yarn
COPY . ./

CMD [ "sh", "start.sh" ]