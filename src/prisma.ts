import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likes: <T = Array<Like | null>>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    matches: <T = Array<Match | null>>(args: { where?: MatchWhereInput | null, orderBy?: MatchOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Array<Job | null>>(args: { where?: JobWhereInput | null, orderBy?: JobOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    like: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    match: <T = Match | null>(args: { where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likesConnection: <T = LikeConnection>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    matchesConnection: <T = MatchConnection>(args: { where?: MatchWhereInput | null, orderBy?: MatchOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput | null, orderBy?: JobOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLike: <T = Like>(args: { data: LikeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMatch: <T = Match>(args: { data: MatchCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLike: <T = Like | null>(args: { data: LikeUpdateInput, where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMatch: <T = Match | null>(args: { data: MatchUpdateInput, where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLike: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMatch: <T = Match | null>(args: { where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLike: <T = Like>(args: { where: LikeWhereUniqueInput, create: LikeCreateInput, update: LikeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMatch: <T = Match>(args: { where: MatchWhereUniqueInput, create: MatchCreateInput, update: MatchUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLikes: <T = BatchPayload>(args: { data: LikeUpdateManyMutationInput, where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMatches: <T = BatchPayload>(args: { data: MatchUpdateManyMutationInput, where?: MatchWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateManyMutationInput, where?: JobWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLikes: <T = BatchPayload>(args: { where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMatches: <T = BatchPayload>(args: { where?: MatchWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    like: <T = LikeSubscriptionPayload | null>(args: { where?: LikeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    match: <T = MatchSubscriptionPayload | null>(args: { where?: MatchSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Like: (where?: LikeWhereInput) => Promise<boolean>
  Match: (where?: MatchWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateJob {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregateMatch {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

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

"""A connection to a list of items."""
type JobConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JobEdge]!
  aggregate: AggregateJob!
}

input JobCreateInput {
  id: UUID
  companyName: String!
  companyAvatarUrl: String!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  city: String!
  deleted: Boolean
  like: LikeCreateOneWithoutJobInput
}

input JobCreateOneWithoutLikeInput {
  create: JobCreateWithoutLikeInput
  connect: JobWhereUniqueInput
}

input JobCreateWithoutLikeInput {
  id: UUID
  companyName: String!
  companyAvatarUrl: String!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  city: String!
  deleted: Boolean
}

"""An edge in a connection."""
type JobEdge {
  """The item at the end of the edge."""
  node: Job!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JobOrderByInput {
  id_ASC
  id_DESC
  companyName_ASC
  companyName_DESC
  companyAvatarUrl_ASC
  companyAvatarUrl_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  weekHours_ASC
  weekHours_DESC
  weekDays_ASC
  weekDays_DESC
  remuneration_ASC
  remuneration_DESC
  city_ASC
  city_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type JobPreviousValues {
  id: UUID!
  companyName: String!
  companyAvatarUrl: String!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  city: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type JobSubscriptionPayload {
  mutation: MutationType!
  node: Job
  updatedFields: [String!]
  previousValues: JobPreviousValues
}

input JobSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: JobWhereInput
}

input JobUpdateInput {
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  deleted: Boolean
  like: LikeUpdateOneWithoutJobInput
}

input JobUpdateManyMutationInput {
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  deleted: Boolean
}

input JobUpdateOneWithoutLikeInput {
  create: JobCreateWithoutLikeInput
  connect: JobWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: JobUpdateWithoutLikeDataInput
  upsert: JobUpsertWithoutLikeInput
}

input JobUpdateWithoutLikeDataInput {
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  deleted: Boolean
}

input JobUpsertWithoutLikeInput {
  update: JobUpdateWithoutLikeDataInput!
  create: JobCreateWithoutLikeInput!
}

input JobWhereInput {
  """Logical AND on all given filters."""
  AND: [JobWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  companyName: String

  """All values that are not equal to given value."""
  companyName_not: String

  """All values that are contained in given list."""
  companyName_in: [String!]

  """All values that are not contained in given list."""
  companyName_not_in: [String!]

  """All values less than the given value."""
  companyName_lt: String

  """All values less than or equal the given value."""
  companyName_lte: String

  """All values greater than the given value."""
  companyName_gt: String

  """All values greater than or equal the given value."""
  companyName_gte: String

  """All values containing the given string."""
  companyName_contains: String

  """All values not containing the given string."""
  companyName_not_contains: String

  """All values starting with the given string."""
  companyName_starts_with: String

  """All values not starting with the given string."""
  companyName_not_starts_with: String

  """All values ending with the given string."""
  companyName_ends_with: String

  """All values not ending with the given string."""
  companyName_not_ends_with: String
  companyAvatarUrl: String

  """All values that are not equal to given value."""
  companyAvatarUrl_not: String

  """All values that are contained in given list."""
  companyAvatarUrl_in: [String!]

  """All values that are not contained in given list."""
  companyAvatarUrl_not_in: [String!]

  """All values less than the given value."""
  companyAvatarUrl_lt: String

  """All values less than or equal the given value."""
  companyAvatarUrl_lte: String

  """All values greater than the given value."""
  companyAvatarUrl_gt: String

  """All values greater than or equal the given value."""
  companyAvatarUrl_gte: String

  """All values containing the given string."""
  companyAvatarUrl_contains: String

  """All values not containing the given string."""
  companyAvatarUrl_not_contains: String

  """All values starting with the given string."""
  companyAvatarUrl_starts_with: String

  """All values not starting with the given string."""
  companyAvatarUrl_not_starts_with: String

  """All values ending with the given string."""
  companyAvatarUrl_ends_with: String

  """All values not ending with the given string."""
  companyAvatarUrl_not_ends_with: String
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  weekHours: Int

  """All values that are not equal to given value."""
  weekHours_not: Int

  """All values that are contained in given list."""
  weekHours_in: [Int!]

  """All values that are not contained in given list."""
  weekHours_not_in: [Int!]

  """All values less than the given value."""
  weekHours_lt: Int

  """All values less than or equal the given value."""
  weekHours_lte: Int

  """All values greater than the given value."""
  weekHours_gt: Int

  """All values greater than or equal the given value."""
  weekHours_gte: Int
  weekDays: String

  """All values that are not equal to given value."""
  weekDays_not: String

  """All values that are contained in given list."""
  weekDays_in: [String!]

  """All values that are not contained in given list."""
  weekDays_not_in: [String!]

  """All values less than the given value."""
  weekDays_lt: String

  """All values less than or equal the given value."""
  weekDays_lte: String

  """All values greater than the given value."""
  weekDays_gt: String

  """All values greater than or equal the given value."""
  weekDays_gte: String

  """All values containing the given string."""
  weekDays_contains: String

  """All values not containing the given string."""
  weekDays_not_contains: String

  """All values starting with the given string."""
  weekDays_starts_with: String

  """All values not starting with the given string."""
  weekDays_not_starts_with: String

  """All values ending with the given string."""
  weekDays_ends_with: String

  """All values not ending with the given string."""
  weekDays_not_ends_with: String
  remuneration: Float

  """All values that are not equal to given value."""
  remuneration_not: Float

  """All values that are contained in given list."""
  remuneration_in: [Float!]

  """All values that are not contained in given list."""
  remuneration_not_in: [Float!]

  """All values less than the given value."""
  remuneration_lt: Float

  """All values less than or equal the given value."""
  remuneration_lte: Float

  """All values greater than the given value."""
  remuneration_gt: Float

  """All values greater than or equal the given value."""
  remuneration_gte: Float
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  like: LikeWhereInput
}

input JobWhereUniqueInput {
  id: UUID
}

"""Raw JSON value"""
scalar Json

type Like {
  id: UUID!
  user: User
  job: Job
  match: Match
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type LikeConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [LikeEdge]!
  aggregate: AggregateLike!
}

input LikeCreateInput {
  id: UUID
  deleted: Boolean
  user: UserCreateOneWithoutLikesInput
  job: JobCreateOneWithoutLikeInput
  match: MatchCreateOneWithoutLikeInput
}

input LikeCreateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateOneWithoutJobInput {
  create: LikeCreateWithoutJobInput
  connect: LikeWhereUniqueInput
}

input LikeCreateOneWithoutMatchInput {
  create: LikeCreateWithoutMatchInput
  connect: LikeWhereUniqueInput
}

input LikeCreateWithoutJobInput {
  id: UUID
  deleted: Boolean
  user: UserCreateOneWithoutLikesInput
  match: MatchCreateOneWithoutLikeInput
}

input LikeCreateWithoutMatchInput {
  id: UUID
  deleted: Boolean
  user: UserCreateOneWithoutLikesInput
  job: JobCreateOneWithoutLikeInput
}

input LikeCreateWithoutUserInput {
  id: UUID
  deleted: Boolean
  job: JobCreateOneWithoutLikeInput
  match: MatchCreateOneWithoutLikeInput
}

"""An edge in a connection."""
type LikeEdge {
  """The item at the end of the edge."""
  node: Like!

  """A cursor for use in pagination."""
  cursor: String!
}

enum LikeOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type LikePreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input LikeScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
}

type LikeSubscriptionPayload {
  mutation: MutationType!
  node: Like
  updatedFields: [String!]
  previousValues: LikePreviousValues
}

input LikeSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: LikeWhereInput
}

input LikeUpdateInput {
  deleted: Boolean
  user: UserUpdateOneWithoutLikesInput
  job: JobUpdateOneWithoutLikeInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateManyDataInput {
  deleted: Boolean
}

input LikeUpdateManyMutationInput {
  deleted: Boolean
}

input LikeUpdateManyWithoutUserInput {
  create: [LikeCreateWithoutUserInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [LikeUpdateManyWithWhereNestedInput!]
  deleteMany: [LikeScalarWhereInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutUserInput!]
}

input LikeUpdateManyWithWhereNestedInput {
  where: LikeScalarWhereInput!
  data: LikeUpdateManyDataInput!
}

input LikeUpdateOneWithoutJobInput {
  create: LikeCreateWithoutJobInput
  connect: LikeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LikeUpdateWithoutJobDataInput
  upsert: LikeUpsertWithoutJobInput
}

input LikeUpdateOneWithoutMatchInput {
  create: LikeCreateWithoutMatchInput
  connect: LikeWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: LikeUpdateWithoutMatchDataInput
  upsert: LikeUpsertWithoutMatchInput
}

input LikeUpdateWithoutJobDataInput {
  deleted: Boolean
  user: UserUpdateOneWithoutLikesInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateWithoutMatchDataInput {
  deleted: Boolean
  user: UserUpdateOneWithoutLikesInput
  job: JobUpdateOneWithoutLikeInput
}

input LikeUpdateWithoutUserDataInput {
  deleted: Boolean
  job: JobUpdateOneWithoutLikeInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutUserDataInput!
}

input LikeUpsertWithoutJobInput {
  update: LikeUpdateWithoutJobDataInput!
  create: LikeCreateWithoutJobInput!
}

input LikeUpsertWithoutMatchInput {
  update: LikeUpdateWithoutMatchDataInput!
  create: LikeCreateWithoutMatchInput!
}

input LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutUserDataInput!
  create: LikeCreateWithoutUserInput!
}

input LikeWhereInput {
  """Logical AND on all given filters."""
  AND: [LikeWhereInput!]

  """Logical OR on all given filters."""
  OR: [LikeWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [LikeWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  user: UserWhereInput
  job: JobWhereInput
  match: MatchWhereInput
}

input LikeWhereUniqueInput {
  id: UUID
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Match {
  id: UUID!
  like: Like
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type MatchConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [MatchEdge]!
  aggregate: AggregateMatch!
}

input MatchCreateInput {
  id: UUID
  deleted: Boolean
  like: LikeCreateOneWithoutMatchInput
}

input MatchCreateOneWithoutLikeInput {
  create: MatchCreateWithoutLikeInput
  connect: MatchWhereUniqueInput
}

input MatchCreateWithoutLikeInput {
  id: UUID
  deleted: Boolean
}

"""An edge in a connection."""
type MatchEdge {
  """The item at the end of the edge."""
  node: Match!

  """A cursor for use in pagination."""
  cursor: String!
}

enum MatchOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type MatchPreviousValues {
  id: UUID!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type MatchSubscriptionPayload {
  mutation: MutationType!
  node: Match
  updatedFields: [String!]
  previousValues: MatchPreviousValues
}

input MatchSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [MatchSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [MatchSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MatchSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: MatchWhereInput
}

input MatchUpdateInput {
  deleted: Boolean
  like: LikeUpdateOneWithoutMatchInput
}

input MatchUpdateManyMutationInput {
  deleted: Boolean
}

input MatchUpdateOneWithoutLikeInput {
  create: MatchCreateWithoutLikeInput
  connect: MatchWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: MatchUpdateWithoutLikeDataInput
  upsert: MatchUpsertWithoutLikeInput
}

input MatchUpdateWithoutLikeDataInput {
  deleted: Boolean
}

input MatchUpsertWithoutLikeInput {
  update: MatchUpdateWithoutLikeDataInput!
  create: MatchCreateWithoutLikeInput!
}

input MatchWhereInput {
  """Logical AND on all given filters."""
  AND: [MatchWhereInput!]

  """Logical OR on all given filters."""
  OR: [MatchWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [MatchWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  like: LikeWhereInput
}

input MatchWhereUniqueInput {
  id: UUID
}

type Mutation {
  createUser(data: UserCreateInput!): User!
  createLike(data: LikeCreateInput!): Like!
  createMatch(data: MatchCreateInput!): Match!
  createJob(data: JobCreateInput!): Job!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  updateMatch(data: MatchUpdateInput!, where: MatchWhereUniqueInput!): Match
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  deleteUser(where: UserWhereUniqueInput!): User
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteMatch(where: MatchWhereUniqueInput!): Match
  deleteJob(where: JobWhereUniqueInput!): Job
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  upsertMatch(where: MatchWhereUniqueInput!, create: MatchCreateInput!, update: MatchUpdateInput!): Match!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyLikes(data: LikeUpdateManyMutationInput!, where: LikeWhereInput): BatchPayload!
  updateManyMatches(data: MatchUpdateManyMutationInput!, where: MatchWhereInput): BatchPayload!
  updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  deleteManyMatches(where: MatchWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  executeRaw(database: PrismaDatabase, query: String!): Json!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

enum PrismaDatabase {
  default
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  user(where: UserWhereUniqueInput!): User
  like(where: LikeWhereUniqueInput!): Like
  match(where: MatchWhereUniqueInput!): Match
  job(where: JobWhereUniqueInput!): Job
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  matchesConnection(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MatchConnection!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  match(where: MatchSubscriptionWhereInput): MatchSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
}

type User {
  id: UUID!
  email: String!
  password: String!
  profileAvatarUrl: String!
  rating: Float!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: UUID
  email: String!
  password: String!
  profileAvatarUrl: String!
  rating: Float!
  deleted: Boolean
  likes: LikeCreateManyWithoutUserInput
}

input UserCreateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutLikesInput {
  id: UUID
  email: String!
  password: String!
  profileAvatarUrl: String!
  rating: Float!
  deleted: Boolean
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  profileAvatarUrl_ASC
  profileAvatarUrl_DESC
  rating_ASC
  rating_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type UserPreviousValues {
  id: UUID!
  email: String!
  password: String!
  profileAvatarUrl: String!
  rating: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  deleted: Boolean
  likes: LikeUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  deleted: Boolean
}

input UserUpdateOneWithoutLikesInput {
  create: UserCreateWithoutLikesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutLikesDataInput
  upsert: UserUpsertWithoutLikesInput
}

input UserUpdateWithoutLikesDataInput {
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  deleted: Boolean
}

input UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput!
  create: UserCreateWithoutLikesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  profileAvatarUrl: String

  """All values that are not equal to given value."""
  profileAvatarUrl_not: String

  """All values that are contained in given list."""
  profileAvatarUrl_in: [String!]

  """All values that are not contained in given list."""
  profileAvatarUrl_not_in: [String!]

  """All values less than the given value."""
  profileAvatarUrl_lt: String

  """All values less than or equal the given value."""
  profileAvatarUrl_lte: String

  """All values greater than the given value."""
  profileAvatarUrl_gt: String

  """All values greater than or equal the given value."""
  profileAvatarUrl_gte: String

  """All values containing the given string."""
  profileAvatarUrl_contains: String

  """All values not containing the given string."""
  profileAvatarUrl_not_contains: String

  """All values starting with the given string."""
  profileAvatarUrl_starts_with: String

  """All values not starting with the given string."""
  profileAvatarUrl_not_starts_with: String

  """All values ending with the given string."""
  profileAvatarUrl_ends_with: String

  """All values not ending with the given string."""
  profileAvatarUrl_not_ends_with: String
  rating: Float

  """All values that are not equal to given value."""
  rating_not: Float

  """All values that are contained in given list."""
  rating_in: [Float!]

  """All values that are not contained in given list."""
  rating_not_in: [Float!]

  """All values less than the given value."""
  rating_lt: Float

  """All values less than or equal the given value."""
  rating_lte: Float

  """All values greater than the given value."""
  rating_gt: Float

  """All values greater than or equal the given value."""
  rating_gte: Float
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  deleted: Boolean

  """All values that are not equal to given value."""
  deleted_not: Boolean
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
}

input UserWhereUniqueInput {
  id: UUID
  email: String
}

"""A type 4 UUID according to IETF RFC 4122."""
scalar UUID
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type JobOrderByInput =   'id_ASC' |
  'id_DESC' |
  'companyName_ASC' |
  'companyName_DESC' |
  'companyAvatarUrl_ASC' |
  'companyAvatarUrl_DESC' |
  'title_ASC' |
  'title_DESC' |
  'description_ASC' |
  'description_DESC' |
  'weekHours_ASC' |
  'weekHours_DESC' |
  'weekDays_ASC' |
  'weekDays_DESC' |
  'remuneration_ASC' |
  'remuneration_DESC' |
  'city_ASC' |
  'city_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type LikeOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type MatchOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type PrismaDatabase =   'default'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'profileAvatarUrl_ASC' |
  'profileAvatarUrl_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export interface JobCreateInput {
  id?: UUID | null
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  deleted?: Boolean | null
  like?: LikeCreateOneWithoutJobInput | null
}

export interface JobCreateOneWithoutLikeInput {
  create?: JobCreateWithoutLikeInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateWithoutLikeInput {
  id?: UUID | null
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  deleted?: Boolean | null
}

export interface JobSubscriptionWhereInput {
  AND?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput | null
  OR?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput | null
  NOT?: JobSubscriptionWhereInput[] | JobSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: JobWhereInput | null
}

export interface JobUpdateInput {
  companyName?: String | null
  companyAvatarUrl?: String | null
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  city?: String | null
  deleted?: Boolean | null
  like?: LikeUpdateOneWithoutJobInput | null
}

export interface JobUpdateManyMutationInput {
  companyName?: String | null
  companyAvatarUrl?: String | null
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  city?: String | null
  deleted?: Boolean | null
}

export interface JobUpdateOneWithoutLikeInput {
  create?: JobCreateWithoutLikeInput | null
  connect?: JobWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: JobUpdateWithoutLikeDataInput | null
  upsert?: JobUpsertWithoutLikeInput | null
}

export interface JobUpdateWithoutLikeDataInput {
  companyName?: String | null
  companyAvatarUrl?: String | null
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  city?: String | null
  deleted?: Boolean | null
}

export interface JobUpsertWithoutLikeInput {
  update: JobUpdateWithoutLikeDataInput
  create: JobCreateWithoutLikeInput
}

export interface JobWhereInput {
  AND?: JobWhereInput[] | JobWhereInput | null
  OR?: JobWhereInput[] | JobWhereInput | null
  NOT?: JobWhereInput[] | JobWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  companyName?: String | null
  companyName_not?: String | null
  companyName_in?: String[] | String | null
  companyName_not_in?: String[] | String | null
  companyName_lt?: String | null
  companyName_lte?: String | null
  companyName_gt?: String | null
  companyName_gte?: String | null
  companyName_contains?: String | null
  companyName_not_contains?: String | null
  companyName_starts_with?: String | null
  companyName_not_starts_with?: String | null
  companyName_ends_with?: String | null
  companyName_not_ends_with?: String | null
  companyAvatarUrl?: String | null
  companyAvatarUrl_not?: String | null
  companyAvatarUrl_in?: String[] | String | null
  companyAvatarUrl_not_in?: String[] | String | null
  companyAvatarUrl_lt?: String | null
  companyAvatarUrl_lte?: String | null
  companyAvatarUrl_gt?: String | null
  companyAvatarUrl_gte?: String | null
  companyAvatarUrl_contains?: String | null
  companyAvatarUrl_not_contains?: String | null
  companyAvatarUrl_starts_with?: String | null
  companyAvatarUrl_not_starts_with?: String | null
  companyAvatarUrl_ends_with?: String | null
  companyAvatarUrl_not_ends_with?: String | null
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  weekHours?: Int | null
  weekHours_not?: Int | null
  weekHours_in?: Int[] | Int | null
  weekHours_not_in?: Int[] | Int | null
  weekHours_lt?: Int | null
  weekHours_lte?: Int | null
  weekHours_gt?: Int | null
  weekHours_gte?: Int | null
  weekDays?: String | null
  weekDays_not?: String | null
  weekDays_in?: String[] | String | null
  weekDays_not_in?: String[] | String | null
  weekDays_lt?: String | null
  weekDays_lte?: String | null
  weekDays_gt?: String | null
  weekDays_gte?: String | null
  weekDays_contains?: String | null
  weekDays_not_contains?: String | null
  weekDays_starts_with?: String | null
  weekDays_not_starts_with?: String | null
  weekDays_ends_with?: String | null
  weekDays_not_ends_with?: String | null
  remuneration?: Float | null
  remuneration_not?: Float | null
  remuneration_in?: Float[] | Float | null
  remuneration_not_in?: Float[] | Float | null
  remuneration_lt?: Float | null
  remuneration_lte?: Float | null
  remuneration_gt?: Float | null
  remuneration_gte?: Float | null
  city?: String | null
  city_not?: String | null
  city_in?: String[] | String | null
  city_not_in?: String[] | String | null
  city_lt?: String | null
  city_lte?: String | null
  city_gt?: String | null
  city_gte?: String | null
  city_contains?: String | null
  city_not_contains?: String | null
  city_starts_with?: String | null
  city_not_starts_with?: String | null
  city_ends_with?: String | null
  city_not_ends_with?: String | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  like?: LikeWhereInput | null
}

export interface JobWhereUniqueInput {
  id?: UUID | null
}

export interface LikeCreateInput {
  id?: UUID | null
  deleted?: Boolean | null
  user?: UserCreateOneWithoutLikesInput | null
  job?: JobCreateOneWithoutLikeInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeCreateManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[] | LikeCreateWithoutUserInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateOneWithoutJobInput {
  create?: LikeCreateWithoutJobInput | null
  connect?: LikeWhereUniqueInput | null
}

export interface LikeCreateOneWithoutMatchInput {
  create?: LikeCreateWithoutMatchInput | null
  connect?: LikeWhereUniqueInput | null
}

export interface LikeCreateWithoutJobInput {
  id?: UUID | null
  deleted?: Boolean | null
  user?: UserCreateOneWithoutLikesInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeCreateWithoutMatchInput {
  id?: UUID | null
  deleted?: Boolean | null
  user?: UserCreateOneWithoutLikesInput | null
  job?: JobCreateOneWithoutLikeInput | null
}

export interface LikeCreateWithoutUserInput {
  id?: UUID | null
  deleted?: Boolean | null
  job?: JobCreateOneWithoutLikeInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeScalarWhereInput {
  AND?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  OR?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  NOT?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
}

export interface LikeSubscriptionWhereInput {
  AND?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  OR?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  NOT?: LikeSubscriptionWhereInput[] | LikeSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: LikeWhereInput | null
}

export interface LikeUpdateInput {
  deleted?: Boolean | null
  user?: UserUpdateOneWithoutLikesInput | null
  job?: JobUpdateOneWithoutLikeInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateManyDataInput {
  deleted?: Boolean | null
}

export interface LikeUpdateManyMutationInput {
  deleted?: Boolean | null
}

export interface LikeUpdateManyWithoutUserInput {
  create?: LikeCreateWithoutUserInput[] | LikeCreateWithoutUserInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  set?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutUserInput[] | LikeUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: LikeUpdateManyWithWhereNestedInput[] | LikeUpdateManyWithWhereNestedInput | null
  deleteMany?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutUserInput[] | LikeUpsertWithWhereUniqueWithoutUserInput | null
}

export interface LikeUpdateManyWithWhereNestedInput {
  where: LikeScalarWhereInput
  data: LikeUpdateManyDataInput
}

export interface LikeUpdateOneWithoutJobInput {
  create?: LikeCreateWithoutJobInput | null
  connect?: LikeWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LikeUpdateWithoutJobDataInput | null
  upsert?: LikeUpsertWithoutJobInput | null
}

export interface LikeUpdateOneWithoutMatchInput {
  create?: LikeCreateWithoutMatchInput | null
  connect?: LikeWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: LikeUpdateWithoutMatchDataInput | null
  upsert?: LikeUpsertWithoutMatchInput | null
}

export interface LikeUpdateWithoutJobDataInput {
  deleted?: Boolean | null
  user?: UserUpdateOneWithoutLikesInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateWithoutMatchDataInput {
  deleted?: Boolean | null
  user?: UserUpdateOneWithoutLikesInput | null
  job?: JobUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateWithoutUserDataInput {
  deleted?: Boolean | null
  job?: JobUpdateOneWithoutLikeInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutUserDataInput
}

export interface LikeUpsertWithoutJobInput {
  update: LikeUpdateWithoutJobDataInput
  create: LikeCreateWithoutJobInput
}

export interface LikeUpsertWithoutMatchInput {
  update: LikeUpdateWithoutMatchDataInput
  create: LikeCreateWithoutMatchInput
}

export interface LikeUpsertWithWhereUniqueWithoutUserInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutUserDataInput
  create: LikeCreateWithoutUserInput
}

export interface LikeWhereInput {
  AND?: LikeWhereInput[] | LikeWhereInput | null
  OR?: LikeWhereInput[] | LikeWhereInput | null
  NOT?: LikeWhereInput[] | LikeWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  user?: UserWhereInput | null
  job?: JobWhereInput | null
  match?: MatchWhereInput | null
}

export interface LikeWhereUniqueInput {
  id?: UUID | null
}

export interface MatchCreateInput {
  id?: UUID | null
  deleted?: Boolean | null
  like?: LikeCreateOneWithoutMatchInput | null
}

export interface MatchCreateOneWithoutLikeInput {
  create?: MatchCreateWithoutLikeInput | null
  connect?: MatchWhereUniqueInput | null
}

export interface MatchCreateWithoutLikeInput {
  id?: UUID | null
  deleted?: Boolean | null
}

export interface MatchSubscriptionWhereInput {
  AND?: MatchSubscriptionWhereInput[] | MatchSubscriptionWhereInput | null
  OR?: MatchSubscriptionWhereInput[] | MatchSubscriptionWhereInput | null
  NOT?: MatchSubscriptionWhereInput[] | MatchSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: MatchWhereInput | null
}

export interface MatchUpdateInput {
  deleted?: Boolean | null
  like?: LikeUpdateOneWithoutMatchInput | null
}

export interface MatchUpdateManyMutationInput {
  deleted?: Boolean | null
}

export interface MatchUpdateOneWithoutLikeInput {
  create?: MatchCreateWithoutLikeInput | null
  connect?: MatchWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: MatchUpdateWithoutLikeDataInput | null
  upsert?: MatchUpsertWithoutLikeInput | null
}

export interface MatchUpdateWithoutLikeDataInput {
  deleted?: Boolean | null
}

export interface MatchUpsertWithoutLikeInput {
  update: MatchUpdateWithoutLikeDataInput
  create: MatchCreateWithoutLikeInput
}

export interface MatchWhereInput {
  AND?: MatchWhereInput[] | MatchWhereInput | null
  OR?: MatchWhereInput[] | MatchWhereInput | null
  NOT?: MatchWhereInput[] | MatchWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  like?: LikeWhereInput | null
}

export interface MatchWhereUniqueInput {
  id?: UUID | null
}

export interface UserCreateInput {
  id?: UUID | null
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  deleted?: Boolean | null
  likes?: LikeCreateManyWithoutUserInput | null
}

export interface UserCreateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutLikesInput {
  id?: UUID | null
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  deleted?: Boolean | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  password?: String | null
  profileAvatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  likes?: LikeUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  password?: String | null
  profileAvatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
}

export interface UserUpdateOneWithoutLikesInput {
  create?: UserCreateWithoutLikesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutLikesDataInput | null
  upsert?: UserUpsertWithoutLikesInput | null
}

export interface UserUpdateWithoutLikesDataInput {
  email?: String | null
  password?: String | null
  profileAvatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
}

export interface UserUpsertWithoutLikesInput {
  update: UserUpdateWithoutLikesDataInput
  create: UserCreateWithoutLikesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  profileAvatarUrl?: String | null
  profileAvatarUrl_not?: String | null
  profileAvatarUrl_in?: String[] | String | null
  profileAvatarUrl_not_in?: String[] | String | null
  profileAvatarUrl_lt?: String | null
  profileAvatarUrl_lte?: String | null
  profileAvatarUrl_gt?: String | null
  profileAvatarUrl_gte?: String | null
  profileAvatarUrl_contains?: String | null
  profileAvatarUrl_not_contains?: String | null
  profileAvatarUrl_starts_with?: String | null
  profileAvatarUrl_not_starts_with?: String | null
  profileAvatarUrl_ends_with?: String | null
  profileAvatarUrl_not_ends_with?: String | null
  rating?: Float | null
  rating_not?: Float | null
  rating_in?: Float[] | Float | null
  rating_not_in?: Float[] | Float | null
  rating_lt?: Float | null
  rating_lte?: Float | null
  rating_gt?: Float | null
  rating_gte?: Float | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  deleted?: Boolean | null
  deleted_not?: Boolean | null
  likes_every?: LikeWhereInput | null
  likes_some?: LikeWhereInput | null
  likes_none?: LikeWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: UUID | null
  email?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateJob {
  count: Int
}

export interface AggregateLike {
  count: Int
}

export interface AggregateMatch {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface Job {
  id: UUID
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  like?: Like | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface JobConnection {
  pageInfo: PageInfo
  edges: Array<JobEdge | null>
  aggregate: AggregateJob
}

/*
 * An edge in a connection.

 */
export interface JobEdge {
  node: Job
  cursor: String
}

export interface JobPreviousValues {
  id: UUID
  companyName: String
  companyAvatarUrl: String
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  city: String
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface JobSubscriptionPayload {
  mutation: MutationType
  node?: Job | null
  updatedFields?: Array<String> | null
  previousValues?: JobPreviousValues | null
}

export interface Like {
  id: UUID
  user?: User | null
  job?: Job | null
  match?: Match | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface LikeConnection {
  pageInfo: PageInfo
  edges: Array<LikeEdge | null>
  aggregate: AggregateLike
}

/*
 * An edge in a connection.

 */
export interface LikeEdge {
  node: Like
  cursor: String
}

export interface LikePreviousValues {
  id: UUID
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface LikeSubscriptionPayload {
  mutation: MutationType
  node?: Like | null
  updatedFields?: Array<String> | null
  previousValues?: LikePreviousValues | null
}

export interface Match {
  id: UUID
  like?: Like | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface MatchConnection {
  pageInfo: PageInfo
  edges: Array<MatchEdge | null>
  aggregate: AggregateMatch
}

/*
 * An edge in a connection.

 */
export interface MatchEdge {
  node: Match
  cursor: String
}

export interface MatchPreviousValues {
  id: UUID
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface MatchSubscriptionPayload {
  mutation: MutationType
  node?: Match | null
  updatedFields?: Array<String> | null
  previousValues?: MatchPreviousValues | null
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User {
  id: UUID
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  likes?: Array<Like> | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: UUID
  email: String
  password: String
  profileAvatarUrl: String
  rating: Float
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). 
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
Raw JSON value
*/
export type Json = any

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
A type 4 UUID according to IETF RFC 4122.
*/
export type UUID = string