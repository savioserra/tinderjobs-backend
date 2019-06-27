export const typeDefs = `
scalar DateTime
scalar UUID

type User {
  id: UUID!
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!

  city: City!
  company: Company
  skills: [Skill!]!
  managedJobs: [Job!]!
  availableJobs(page: Int = 1, perPage:  Int = 10): [Job!]!
  matches: [Match!]!

  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type City {
  id: UUID!
  name: String!

  users: [User!]!
  jobs: [Job!]!

  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type Match {
  id: UUID!

  job: Job!

  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type JobStatus {
  id: UUID!
  name: String!

  jobs: [Job!]!
}

type Job {
  id: UUID!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: [String!]!

  manager: User!
  city: City!
  status: JobStatus
  company: Company!
  skills: [Skill!]!

  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type Company {
  id: UUID!
  name: String!
  legalName: String!
  avatarUrl: String!

  jobs: [Job!]!
}

type Skill {
  id: UUID!

  name: String!
  description: String

  jobs: [Job!]!
  users: [User!]!
}

type Query {
  me: User!
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

  likeJob(jobId: UUID!): LikePayload!
  likeCandidate(candidateId: UUID!, jobId: UUID!): LikePayload!
}

type Subscription {
  count: Int!
}
`;
