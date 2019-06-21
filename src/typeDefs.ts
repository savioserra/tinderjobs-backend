export const typeDefs = `
scalar DateTime
scalar UUID

type User {
  id: UUID!
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!

  likes: [Like!]!

  createdAt: DateTime! 
  updatedAt: DateTime! 
  deleted: Boolean! 
}

type Like {
  id: UUID!  

  user: User 
  job: Job 
  match: Match

  createdAt: DateTime! 
  updatedAt: DateTime! 
  deleted: Boolean! 
}

type Match {
  id: UUID!  

  like: Like

  createdAt: DateTime! 
  updatedAt: DateTime! 
  deleted: Boolean! 
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
  city: String!

  like: Like

  createdAt: DateTime! 
  updatedAt: DateTime! 
  deleted: Boolean! 
}

type Query {
  me: User!
  jobs: [Job!]!
}

type AuthPayload {
  token: String
  user: User
}

type Mutation {
  signUp(email: String!, password: String!): AuthPayload!
}

type Subscription {
  count: Int!
}
`;
