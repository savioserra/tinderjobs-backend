export const typeDefs = `
scalar DateTime
scalar UUID

type User {
  id: UUID!
  email: String!
  avatarUrl: String!
  rating: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!

  matches: [Match!]!
  skills: [Skill!]!
  city: City!
}

type Skill {
  id: UUID!
  name: String!
  description: String
}

type City {
  id: UUID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type Match {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!

  job: Job!
}

type Job {
  id: UUID!
  companyName: String!
  companyAvatarUrl: String!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
  matchThreshold: Float!

  city: City!
}

type Query {
  me: User!
  jobs: [Job!]!
}

type AuthPayload {
  token: String
  user: User
  info: String!
}

type LikePayload {
  info: String!
  success: Boolean!
}

type Mutation {
  signUp(email: String!, password: String!, avatarUrl: String!, city: String!): AuthPayload!
  login(email: String!, password: String!): AuthPayload!

  like(jobId: UUID!): LikePayload!
}

type Subscription {
  count: Int!
}
`;
