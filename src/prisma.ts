import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    cities: <T = Array<City | null>>(args: { where?: CityWhereInput | null, orderBy?: CityOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likes: <T = Array<Like | null>>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    matches: <T = Array<Match | null>>(args: { where?: MatchWhereInput | null, orderBy?: MatchOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobStatuses: <T = Array<JobStatus | null>>(args: { where?: JobStatusWhereInput | null, orderBy?: JobStatusOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobs: <T = Array<Job | null>>(args: { where?: JobWhereInput | null, orderBy?: JobOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    companies: <T = Array<Company | null>>(args: { where?: CompanyWhereInput | null, orderBy?: CompanyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    skills: <T = Array<Skill | null>>(args: { where?: SkillWhereInput | null, orderBy?: SkillOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    city: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    like: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    match: <T = Match | null>(args: { where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    jobStatus: <T = JobStatus | null>(args: { where: JobStatusWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    job: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    company: <T = Company | null>(args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    skill: <T = Skill | null>(args: { where: SkillWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    citiesConnection: <T = CityConnection>(args: { where?: CityWhereInput | null, orderBy?: CityOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    likesConnection: <T = LikeConnection>(args: { where?: LikeWhereInput | null, orderBy?: LikeOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    matchesConnection: <T = MatchConnection>(args: { where?: MatchWhereInput | null, orderBy?: MatchOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobStatusesConnection: <T = JobStatusConnection>(args: { where?: JobStatusWhereInput | null, orderBy?: JobStatusOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    jobsConnection: <T = JobConnection>(args: { where?: JobWhereInput | null, orderBy?: JobOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    companiesConnection: <T = CompanyConnection>(args: { where?: CompanyWhereInput | null, orderBy?: CompanyOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    skillsConnection: <T = SkillConnection>(args: { where?: SkillWhereInput | null, orderBy?: SkillOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCity: <T = City>(args: { data: CityCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createLike: <T = Like>(args: { data: LikeCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createMatch: <T = Match>(args: { data: MatchCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJobStatus: <T = JobStatus>(args: { data: JobStatusCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createJob: <T = Job>(args: { data: JobCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createCompany: <T = Company>(args: { data: CompanyCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSkill: <T = Skill>(args: { data: SkillCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCity: <T = City | null>(args: { data: CityUpdateInput, where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateLike: <T = Like | null>(args: { data: LikeUpdateInput, where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateMatch: <T = Match | null>(args: { data: MatchUpdateInput, where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateJobStatus: <T = JobStatus | null>(args: { data: JobStatusUpdateInput, where: JobStatusWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateJob: <T = Job | null>(args: { data: JobUpdateInput, where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateCompany: <T = Company | null>(args: { data: CompanyUpdateInput, where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSkill: <T = Skill | null>(args: { data: SkillUpdateInput, where: SkillWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCity: <T = City | null>(args: { where: CityWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteLike: <T = Like | null>(args: { where: LikeWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteMatch: <T = Match | null>(args: { where: MatchWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteJobStatus: <T = JobStatus | null>(args: { where: JobStatusWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteJob: <T = Job | null>(args: { where: JobWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteCompany: <T = Company | null>(args: { where: CompanyWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSkill: <T = Skill | null>(args: { where: SkillWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCity: <T = City>(args: { where: CityWhereUniqueInput, create: CityCreateInput, update: CityUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertLike: <T = Like>(args: { where: LikeWhereUniqueInput, create: LikeCreateInput, update: LikeUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertMatch: <T = Match>(args: { where: MatchWhereUniqueInput, create: MatchCreateInput, update: MatchUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJobStatus: <T = JobStatus>(args: { where: JobStatusWhereUniqueInput, create: JobStatusCreateInput, update: JobStatusUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertJob: <T = Job>(args: { where: JobWhereUniqueInput, create: JobCreateInput, update: JobUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertCompany: <T = Company>(args: { where: CompanyWhereUniqueInput, create: CompanyCreateInput, update: CompanyUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSkill: <T = Skill>(args: { where: SkillWhereUniqueInput, create: SkillCreateInput, update: SkillUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCities: <T = BatchPayload>(args: { data: CityUpdateManyMutationInput, where?: CityWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyLikes: <T = BatchPayload>(args: { data: LikeUpdateManyMutationInput, where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyMatches: <T = BatchPayload>(args: { data: MatchUpdateManyMutationInput, where?: MatchWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobStatuses: <T = BatchPayload>(args: { data: JobStatusUpdateManyMutationInput, where?: JobStatusWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyJobs: <T = BatchPayload>(args: { data: JobUpdateManyMutationInput, where?: JobWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyCompanies: <T = BatchPayload>(args: { data: CompanyUpdateManyMutationInput, where?: CompanyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySkills: <T = BatchPayload>(args: { data: SkillUpdateManyMutationInput, where?: SkillWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCities: <T = BatchPayload>(args: { where?: CityWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyLikes: <T = BatchPayload>(args: { where?: LikeWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyMatches: <T = BatchPayload>(args: { where?: MatchWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobStatuses: <T = BatchPayload>(args: { where?: JobStatusWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyJobs: <T = BatchPayload>(args: { where?: JobWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyCompanies: <T = BatchPayload>(args: { where?: CompanyWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySkills: <T = BatchPayload>(args: { where?: SkillWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    executeRaw: <T = Json>(args: { database?: PrismaDatabase | null, query: String }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    city: <T = CitySubscriptionPayload | null>(args: { where?: CitySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    like: <T = LikeSubscriptionPayload | null>(args: { where?: LikeSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    match: <T = MatchSubscriptionPayload | null>(args: { where?: MatchSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    jobStatus: <T = JobStatusSubscriptionPayload | null>(args: { where?: JobStatusSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    job: <T = JobSubscriptionPayload | null>(args: { where?: JobSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    company: <T = CompanySubscriptionPayload | null>(args: { where?: CompanySubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    skill: <T = SkillSubscriptionPayload | null>(args: { where?: SkillSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  City: (where?: CityWhereInput) => Promise<boolean>
  Like: (where?: LikeWhereInput) => Promise<boolean>
  Match: (where?: MatchWhereInput) => Promise<boolean>
  JobStatus: (where?: JobStatusWhereInput) => Promise<boolean>
  Job: (where?: JobWhereInput) => Promise<boolean>
  Company: (where?: CompanyWhereInput) => Promise<boolean>
  Skill: (where?: SkillWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateCity {
  count: Int!
}

type AggregateCompany {
  count: Int!
}

type AggregateJob {
  count: Int!
}

type AggregateJobStatus {
  count: Int!
}

type AggregateLike {
  count: Int!
}

type AggregateMatch {
  count: Int!
}

type AggregateSkill {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

type City {
  id: UUID!
  name: String!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

"""A connection to a list of items."""
type CityConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CityEdge]!
  aggregate: AggregateCity!
}

input CityCreateInput {
  id: UUID
  name: String!
  deleted: Boolean
  users: UserCreateManyWithoutCityInput
  jobs: JobCreateManyWithoutCityInput
}

input CityCreateOneWithoutJobsInput {
  create: CityCreateWithoutJobsInput
  connect: CityWhereUniqueInput
}

input CityCreateOneWithoutUsersInput {
  create: CityCreateWithoutUsersInput
  connect: CityWhereUniqueInput
}

input CityCreateWithoutJobsInput {
  id: UUID
  name: String!
  deleted: Boolean
  users: UserCreateManyWithoutCityInput
}

input CityCreateWithoutUsersInput {
  id: UUID
  name: String!
  deleted: Boolean
  jobs: JobCreateManyWithoutCityInput
}

"""An edge in a connection."""
type CityEdge {
  """The item at the end of the edge."""
  node: City!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CityOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type CityPreviousValues {
  id: UUID!
  name: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

type CitySubscriptionPayload {
  mutation: MutationType!
  node: City
  updatedFields: [String!]
  previousValues: CityPreviousValues
}

input CitySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CitySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CitySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CitySubscriptionWhereInput!]

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
  node: CityWhereInput
}

input CityUpdateInput {
  name: String
  deleted: Boolean
  users: UserUpdateManyWithoutCityInput
  jobs: JobUpdateManyWithoutCityInput
}

input CityUpdateManyMutationInput {
  name: String
  deleted: Boolean
}

input CityUpdateOneRequiredWithoutJobsInput {
  create: CityCreateWithoutJobsInput
  connect: CityWhereUniqueInput
  update: CityUpdateWithoutJobsDataInput
  upsert: CityUpsertWithoutJobsInput
}

input CityUpdateOneRequiredWithoutUsersInput {
  create: CityCreateWithoutUsersInput
  connect: CityWhereUniqueInput
  update: CityUpdateWithoutUsersDataInput
  upsert: CityUpsertWithoutUsersInput
}

input CityUpdateWithoutJobsDataInput {
  name: String
  deleted: Boolean
  users: UserUpdateManyWithoutCityInput
}

input CityUpdateWithoutUsersDataInput {
  name: String
  deleted: Boolean
  jobs: JobUpdateManyWithoutCityInput
}

input CityUpsertWithoutJobsInput {
  update: CityUpdateWithoutJobsDataInput!
  create: CityCreateWithoutJobsInput!
}

input CityUpsertWithoutUsersInput {
  update: CityUpdateWithoutUsersDataInput!
  create: CityCreateWithoutUsersInput!
}

input CityWhereInput {
  """Logical AND on all given filters."""
  AND: [CityWhereInput!]

  """Logical OR on all given filters."""
  OR: [CityWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CityWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
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
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
}

input CityWhereUniqueInput {
  id: UUID
  name: String
}

type Company {
  id: UUID!
  name: String!
  legalName: String!
  avatarUrl: String!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type CompanyConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [CompanyEdge]!
  aggregate: AggregateCompany!
}

input CompanyCreateInput {
  id: UUID
  name: String!
  legalName: String!
  avatarUrl: String!
  jobs: JobCreateManyWithoutCompanyInput
  users: UserCreateManyWithoutCompanyInput
}

input CompanyCreateOneWithoutJobsInput {
  create: CompanyCreateWithoutJobsInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateOneWithoutUsersInput {
  create: CompanyCreateWithoutUsersInput
  connect: CompanyWhereUniqueInput
}

input CompanyCreateWithoutJobsInput {
  id: UUID
  name: String!
  legalName: String!
  avatarUrl: String!
  users: UserCreateManyWithoutCompanyInput
}

input CompanyCreateWithoutUsersInput {
  id: UUID
  name: String!
  legalName: String!
  avatarUrl: String!
  jobs: JobCreateManyWithoutCompanyInput
}

"""An edge in a connection."""
type CompanyEdge {
  """The item at the end of the edge."""
  node: Company!

  """A cursor for use in pagination."""
  cursor: String!
}

enum CompanyOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  legalName_ASC
  legalName_DESC
  avatarUrl_ASC
  avatarUrl_DESC
}

type CompanyPreviousValues {
  id: UUID!
  name: String!
  legalName: String!
  avatarUrl: String!
}

type CompanySubscriptionPayload {
  mutation: MutationType!
  node: Company
  updatedFields: [String!]
  previousValues: CompanyPreviousValues
}

input CompanySubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [CompanySubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [CompanySubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CompanySubscriptionWhereInput!]

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
  node: CompanyWhereInput
}

input CompanyUpdateInput {
  name: String
  legalName: String
  avatarUrl: String
  jobs: JobUpdateManyWithoutCompanyInput
  users: UserUpdateManyWithoutCompanyInput
}

input CompanyUpdateManyMutationInput {
  name: String
  legalName: String
  avatarUrl: String
}

input CompanyUpdateOneRequiredWithoutJobsInput {
  create: CompanyCreateWithoutJobsInput
  connect: CompanyWhereUniqueInput
  update: CompanyUpdateWithoutJobsDataInput
  upsert: CompanyUpsertWithoutJobsInput
}

input CompanyUpdateOneWithoutUsersInput {
  create: CompanyCreateWithoutUsersInput
  connect: CompanyWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: CompanyUpdateWithoutUsersDataInput
  upsert: CompanyUpsertWithoutUsersInput
}

input CompanyUpdateWithoutJobsDataInput {
  name: String
  legalName: String
  avatarUrl: String
  users: UserUpdateManyWithoutCompanyInput
}

input CompanyUpdateWithoutUsersDataInput {
  name: String
  legalName: String
  avatarUrl: String
  jobs: JobUpdateManyWithoutCompanyInput
}

input CompanyUpsertWithoutJobsInput {
  update: CompanyUpdateWithoutJobsDataInput!
  create: CompanyCreateWithoutJobsInput!
}

input CompanyUpsertWithoutUsersInput {
  update: CompanyUpdateWithoutUsersDataInput!
  create: CompanyCreateWithoutUsersInput!
}

input CompanyWhereInput {
  """Logical AND on all given filters."""
  AND: [CompanyWhereInput!]

  """Logical OR on all given filters."""
  OR: [CompanyWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [CompanyWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  legalName: String

  """All values that are not equal to given value."""
  legalName_not: String

  """All values that are contained in given list."""
  legalName_in: [String!]

  """All values that are not contained in given list."""
  legalName_not_in: [String!]

  """All values less than the given value."""
  legalName_lt: String

  """All values less than or equal the given value."""
  legalName_lte: String

  """All values greater than the given value."""
  legalName_gt: String

  """All values greater than or equal the given value."""
  legalName_gte: String

  """All values containing the given string."""
  legalName_contains: String

  """All values not containing the given string."""
  legalName_not_contains: String

  """All values starting with the given string."""
  legalName_starts_with: String

  """All values not starting with the given string."""
  legalName_not_starts_with: String

  """All values ending with the given string."""
  legalName_ends_with: String

  """All values not ending with the given string."""
  legalName_not_ends_with: String
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input CompanyWhereUniqueInput {
  id: UUID
}

scalar DateTime

type Job {
  id: UUID!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  manager: User!
  city: City!
  status: JobStatus!
  company: Company!
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
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
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  manager: UserCreateOneWithoutManagedJobsInput!
  city: CityCreateOneWithoutJobsInput!
  status: JobStatusCreateOneWithoutJobsInput!
  company: CompanyCreateOneWithoutJobsInput!
  skills: SkillCreateManyWithoutJobsInput
  likes: LikeCreateManyWithoutJobInput
}

input JobCreateManyWithoutCityInput {
  create: [JobCreateWithoutCityInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutCompanyInput {
  create: [JobCreateWithoutCompanyInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutManagerInput {
  create: [JobCreateWithoutManagerInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutSkillsInput {
  create: [JobCreateWithoutSkillsInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateManyWithoutStatusInput {
  create: [JobCreateWithoutStatusInput!]
  connect: [JobWhereUniqueInput!]
}

input JobCreateOneWithoutLikesInput {
  create: JobCreateWithoutLikesInput
  connect: JobWhereUniqueInput
}

input JobCreateWithoutCityInput {
  id: UUID
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  manager: UserCreateOneWithoutManagedJobsInput!
  status: JobStatusCreateOneWithoutJobsInput!
  company: CompanyCreateOneWithoutJobsInput!
  skills: SkillCreateManyWithoutJobsInput
  likes: LikeCreateManyWithoutJobInput
}

input JobCreateWithoutCompanyInput {
  id: UUID
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  manager: UserCreateOneWithoutManagedJobsInput!
  city: CityCreateOneWithoutJobsInput!
  status: JobStatusCreateOneWithoutJobsInput!
  skills: SkillCreateManyWithoutJobsInput
  likes: LikeCreateManyWithoutJobInput
}

input JobCreateWithoutLikesInput {
  id: UUID
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  manager: UserCreateOneWithoutManagedJobsInput!
  city: CityCreateOneWithoutJobsInput!
  status: JobStatusCreateOneWithoutJobsInput!
  company: CompanyCreateOneWithoutJobsInput!
  skills: SkillCreateManyWithoutJobsInput
}

input JobCreateWithoutManagerInput {
  id: UUID
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  city: CityCreateOneWithoutJobsInput!
  status: JobStatusCreateOneWithoutJobsInput!
  company: CompanyCreateOneWithoutJobsInput!
  skills: SkillCreateManyWithoutJobsInput
  likes: LikeCreateManyWithoutJobInput
}

input JobCreateWithoutSkillsInput {
  id: UUID
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  manager: UserCreateOneWithoutManagedJobsInput!
  city: CityCreateOneWithoutJobsInput!
  status: JobStatusCreateOneWithoutJobsInput!
  company: CompanyCreateOneWithoutJobsInput!
  likes: LikeCreateManyWithoutJobInput
}

input JobCreateWithoutStatusInput {
  id: UUID
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  deleted: Boolean
  manager: UserCreateOneWithoutManagedJobsInput!
  city: CityCreateOneWithoutJobsInput!
  company: CompanyCreateOneWithoutJobsInput!
  skills: SkillCreateManyWithoutJobsInput
  likes: LikeCreateManyWithoutJobInput
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
  matchThreshold_ASC
  matchThreshold_DESC
  tags_ASC
  tags_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  deleted_ASC
  deleted_DESC
}

type JobPreviousValues {
  id: UUID!
  title: String!
  description: String!
  weekHours: Int!
  weekDays: String!
  remuneration: Float!
  matchThreshold: Float!
  tags: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input JobScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [JobScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
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
  matchThreshold: Float

  """All values that are not equal to given value."""
  matchThreshold_not: Float

  """All values that are contained in given list."""
  matchThreshold_in: [Float!]

  """All values that are not contained in given list."""
  matchThreshold_not_in: [Float!]

  """All values less than the given value."""
  matchThreshold_lt: Float

  """All values less than or equal the given value."""
  matchThreshold_lte: Float

  """All values greater than the given value."""
  matchThreshold_gt: Float

  """All values greater than or equal the given value."""
  matchThreshold_gte: Float
  tags: String

  """All values that are not equal to given value."""
  tags_not: String

  """All values that are contained in given list."""
  tags_in: [String!]

  """All values that are not contained in given list."""
  tags_not_in: [String!]

  """All values less than the given value."""
  tags_lt: String

  """All values less than or equal the given value."""
  tags_lte: String

  """All values greater than the given value."""
  tags_gt: String

  """All values greater than or equal the given value."""
  tags_gte: String

  """All values containing the given string."""
  tags_contains: String

  """All values not containing the given string."""
  tags_not_contains: String

  """All values starting with the given string."""
  tags_starts_with: String

  """All values not starting with the given string."""
  tags_not_starts_with: String

  """All values ending with the given string."""
  tags_ends_with: String

  """All values not ending with the given string."""
  tags_not_ends_with: String
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

type JobStatus {
  id: UUID!
  name: String!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
}

"""A connection to a list of items."""
type JobStatusConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [JobStatusEdge]!
  aggregate: AggregateJobStatus!
}

input JobStatusCreateInput {
  id: UUID
  name: String!
  jobs: JobCreateManyWithoutStatusInput
}

input JobStatusCreateOneWithoutJobsInput {
  create: JobStatusCreateWithoutJobsInput
  connect: JobStatusWhereUniqueInput
}

input JobStatusCreateWithoutJobsInput {
  id: UUID
  name: String!
}

"""An edge in a connection."""
type JobStatusEdge {
  """The item at the end of the edge."""
  node: JobStatus!

  """A cursor for use in pagination."""
  cursor: String!
}

enum JobStatusOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type JobStatusPreviousValues {
  id: UUID!
  name: String!
}

type JobStatusSubscriptionPayload {
  mutation: MutationType!
  node: JobStatus
  updatedFields: [String!]
  previousValues: JobStatusPreviousValues
}

input JobStatusSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [JobStatusSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobStatusSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobStatusSubscriptionWhereInput!]

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
  node: JobStatusWhereInput
}

input JobStatusUpdateInput {
  name: String
  jobs: JobUpdateManyWithoutStatusInput
}

input JobStatusUpdateManyMutationInput {
  name: String
}

input JobStatusUpdateOneRequiredWithoutJobsInput {
  create: JobStatusCreateWithoutJobsInput
  connect: JobStatusWhereUniqueInput
  update: JobStatusUpdateWithoutJobsDataInput
  upsert: JobStatusUpsertWithoutJobsInput
}

input JobStatusUpdateWithoutJobsDataInput {
  name: String
}

input JobStatusUpsertWithoutJobsInput {
  update: JobStatusUpdateWithoutJobsDataInput!
  create: JobStatusCreateWithoutJobsInput!
}

input JobStatusWhereInput {
  """Logical AND on all given filters."""
  AND: [JobStatusWhereInput!]

  """Logical OR on all given filters."""
  OR: [JobStatusWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [JobStatusWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
}

input JobStatusWhereUniqueInput {
  id: UUID
  name: String
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
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  manager: UserUpdateOneRequiredWithoutManagedJobsInput
  city: CityUpdateOneRequiredWithoutJobsInput
  status: JobStatusUpdateOneRequiredWithoutJobsInput
  company: CompanyUpdateOneRequiredWithoutJobsInput
  skills: SkillUpdateManyWithoutJobsInput
  likes: LikeUpdateManyWithoutJobInput
}

input JobUpdateManyDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
}

input JobUpdateManyMutationInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
}

input JobUpdateManyWithoutCityInput {
  create: [JobCreateWithoutCityInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutCityInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
  deleteMany: [JobScalarWhereInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutCityInput!]
}

input JobUpdateManyWithoutCompanyInput {
  create: [JobCreateWithoutCompanyInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutCompanyInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
  deleteMany: [JobScalarWhereInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutCompanyInput!]
}

input JobUpdateManyWithoutManagerInput {
  create: [JobCreateWithoutManagerInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutManagerInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
  deleteMany: [JobScalarWhereInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutManagerInput!]
}

input JobUpdateManyWithoutSkillsInput {
  create: [JobCreateWithoutSkillsInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutSkillsInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
  deleteMany: [JobScalarWhereInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutSkillsInput!]
}

input JobUpdateManyWithoutStatusInput {
  create: [JobCreateWithoutStatusInput!]
  connect: [JobWhereUniqueInput!]
  set: [JobWhereUniqueInput!]
  disconnect: [JobWhereUniqueInput!]
  delete: [JobWhereUniqueInput!]
  update: [JobUpdateWithWhereUniqueWithoutStatusInput!]
  updateMany: [JobUpdateManyWithWhereNestedInput!]
  deleteMany: [JobScalarWhereInput!]
  upsert: [JobUpsertWithWhereUniqueWithoutStatusInput!]
}

input JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput!
  data: JobUpdateManyDataInput!
}

input JobUpdateOneWithoutLikesInput {
  create: JobCreateWithoutLikesInput
  connect: JobWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: JobUpdateWithoutLikesDataInput
  upsert: JobUpsertWithoutLikesInput
}

input JobUpdateWithoutCityDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  manager: UserUpdateOneRequiredWithoutManagedJobsInput
  status: JobStatusUpdateOneRequiredWithoutJobsInput
  company: CompanyUpdateOneRequiredWithoutJobsInput
  skills: SkillUpdateManyWithoutJobsInput
  likes: LikeUpdateManyWithoutJobInput
}

input JobUpdateWithoutCompanyDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  manager: UserUpdateOneRequiredWithoutManagedJobsInput
  city: CityUpdateOneRequiredWithoutJobsInput
  status: JobStatusUpdateOneRequiredWithoutJobsInput
  skills: SkillUpdateManyWithoutJobsInput
  likes: LikeUpdateManyWithoutJobInput
}

input JobUpdateWithoutLikesDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  manager: UserUpdateOneRequiredWithoutManagedJobsInput
  city: CityUpdateOneRequiredWithoutJobsInput
  status: JobStatusUpdateOneRequiredWithoutJobsInput
  company: CompanyUpdateOneRequiredWithoutJobsInput
  skills: SkillUpdateManyWithoutJobsInput
}

input JobUpdateWithoutManagerDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  city: CityUpdateOneRequiredWithoutJobsInput
  status: JobStatusUpdateOneRequiredWithoutJobsInput
  company: CompanyUpdateOneRequiredWithoutJobsInput
  skills: SkillUpdateManyWithoutJobsInput
  likes: LikeUpdateManyWithoutJobInput
}

input JobUpdateWithoutSkillsDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  manager: UserUpdateOneRequiredWithoutManagedJobsInput
  city: CityUpdateOneRequiredWithoutJobsInput
  status: JobStatusUpdateOneRequiredWithoutJobsInput
  company: CompanyUpdateOneRequiredWithoutJobsInput
  likes: LikeUpdateManyWithoutJobInput
}

input JobUpdateWithoutStatusDataInput {
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted: Boolean
  manager: UserUpdateOneRequiredWithoutManagedJobsInput
  city: CityUpdateOneRequiredWithoutJobsInput
  company: CompanyUpdateOneRequiredWithoutJobsInput
  skills: SkillUpdateManyWithoutJobsInput
  likes: LikeUpdateManyWithoutJobInput
}

input JobUpdateWithWhereUniqueWithoutCityInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutCityDataInput!
}

input JobUpdateWithWhereUniqueWithoutCompanyInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutCompanyDataInput!
}

input JobUpdateWithWhereUniqueWithoutManagerInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutManagerDataInput!
}

input JobUpdateWithWhereUniqueWithoutSkillsInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutSkillsDataInput!
}

input JobUpdateWithWhereUniqueWithoutStatusInput {
  where: JobWhereUniqueInput!
  data: JobUpdateWithoutStatusDataInput!
}

input JobUpsertWithoutLikesInput {
  update: JobUpdateWithoutLikesDataInput!
  create: JobCreateWithoutLikesInput!
}

input JobUpsertWithWhereUniqueWithoutCityInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutCityDataInput!
  create: JobCreateWithoutCityInput!
}

input JobUpsertWithWhereUniqueWithoutCompanyInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutCompanyDataInput!
  create: JobCreateWithoutCompanyInput!
}

input JobUpsertWithWhereUniqueWithoutManagerInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutManagerDataInput!
  create: JobCreateWithoutManagerInput!
}

input JobUpsertWithWhereUniqueWithoutSkillsInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutSkillsDataInput!
  create: JobCreateWithoutSkillsInput!
}

input JobUpsertWithWhereUniqueWithoutStatusInput {
  where: JobWhereUniqueInput!
  update: JobUpdateWithoutStatusDataInput!
  create: JobCreateWithoutStatusInput!
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
  matchThreshold: Float

  """All values that are not equal to given value."""
  matchThreshold_not: Float

  """All values that are contained in given list."""
  matchThreshold_in: [Float!]

  """All values that are not contained in given list."""
  matchThreshold_not_in: [Float!]

  """All values less than the given value."""
  matchThreshold_lt: Float

  """All values less than or equal the given value."""
  matchThreshold_lte: Float

  """All values greater than the given value."""
  matchThreshold_gt: Float

  """All values greater than or equal the given value."""
  matchThreshold_gte: Float
  tags: String

  """All values that are not equal to given value."""
  tags_not: String

  """All values that are contained in given list."""
  tags_in: [String!]

  """All values that are not contained in given list."""
  tags_not_in: [String!]

  """All values less than the given value."""
  tags_lt: String

  """All values less than or equal the given value."""
  tags_lte: String

  """All values greater than the given value."""
  tags_gt: String

  """All values greater than or equal the given value."""
  tags_gte: String

  """All values containing the given string."""
  tags_contains: String

  """All values not containing the given string."""
  tags_not_contains: String

  """All values starting with the given string."""
  tags_starts_with: String

  """All values not starting with the given string."""
  tags_not_starts_with: String

  """All values ending with the given string."""
  tags_ends_with: String

  """All values not ending with the given string."""
  tags_not_ends_with: String
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
  manager: UserWhereInput
  city: CityWhereInput
  status: JobStatusWhereInput
  company: CompanyWhereInput
  skills_every: SkillWhereInput
  skills_some: SkillWhereInput
  skills_none: SkillWhereInput
  likes_every: LikeWhereInput
  likes_some: LikeWhereInput
  likes_none: LikeWhereInput
}

input JobWhereUniqueInput {
  id: UUID
}

"""Raw JSON value"""
scalar Json

type Like {
  id: UUID!
  candidate: User
  manager: User
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
  candidate: UserCreateOneWithoutUserLikesInput
  manager: UserCreateOneWithoutManagerLikesInput
  job: JobCreateOneWithoutLikesInput
  match: MatchCreateOneWithoutLikeInput
}

input LikeCreateManyWithoutCandidateInput {
  create: [LikeCreateWithoutCandidateInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutJobInput {
  create: [LikeCreateWithoutJobInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateManyWithoutManagerInput {
  create: [LikeCreateWithoutManagerInput!]
  connect: [LikeWhereUniqueInput!]
}

input LikeCreateOneWithoutMatchInput {
  create: LikeCreateWithoutMatchInput
  connect: LikeWhereUniqueInput
}

input LikeCreateWithoutCandidateInput {
  id: UUID
  deleted: Boolean
  manager: UserCreateOneWithoutManagerLikesInput
  job: JobCreateOneWithoutLikesInput
  match: MatchCreateOneWithoutLikeInput
}

input LikeCreateWithoutJobInput {
  id: UUID
  deleted: Boolean
  candidate: UserCreateOneWithoutUserLikesInput
  manager: UserCreateOneWithoutManagerLikesInput
  match: MatchCreateOneWithoutLikeInput
}

input LikeCreateWithoutManagerInput {
  id: UUID
  deleted: Boolean
  candidate: UserCreateOneWithoutUserLikesInput
  job: JobCreateOneWithoutLikesInput
  match: MatchCreateOneWithoutLikeInput
}

input LikeCreateWithoutMatchInput {
  id: UUID
  deleted: Boolean
  candidate: UserCreateOneWithoutUserLikesInput
  manager: UserCreateOneWithoutManagerLikesInput
  job: JobCreateOneWithoutLikesInput
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
  candidate: UserUpdateOneWithoutUserLikesInput
  manager: UserUpdateOneWithoutManagerLikesInput
  job: JobUpdateOneWithoutLikesInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateManyDataInput {
  deleted: Boolean
}

input LikeUpdateManyMutationInput {
  deleted: Boolean
}

input LikeUpdateManyWithoutCandidateInput {
  create: [LikeCreateWithoutCandidateInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutCandidateInput!]
  updateMany: [LikeUpdateManyWithWhereNestedInput!]
  deleteMany: [LikeScalarWhereInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutCandidateInput!]
}

input LikeUpdateManyWithoutJobInput {
  create: [LikeCreateWithoutJobInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutJobInput!]
  updateMany: [LikeUpdateManyWithWhereNestedInput!]
  deleteMany: [LikeScalarWhereInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutJobInput!]
}

input LikeUpdateManyWithoutManagerInput {
  create: [LikeCreateWithoutManagerInput!]
  connect: [LikeWhereUniqueInput!]
  set: [LikeWhereUniqueInput!]
  disconnect: [LikeWhereUniqueInput!]
  delete: [LikeWhereUniqueInput!]
  update: [LikeUpdateWithWhereUniqueWithoutManagerInput!]
  updateMany: [LikeUpdateManyWithWhereNestedInput!]
  deleteMany: [LikeScalarWhereInput!]
  upsert: [LikeUpsertWithWhereUniqueWithoutManagerInput!]
}

input LikeUpdateManyWithWhereNestedInput {
  where: LikeScalarWhereInput!
  data: LikeUpdateManyDataInput!
}

input LikeUpdateOneRequiredWithoutMatchInput {
  create: LikeCreateWithoutMatchInput
  connect: LikeWhereUniqueInput
  update: LikeUpdateWithoutMatchDataInput
  upsert: LikeUpsertWithoutMatchInput
}

input LikeUpdateWithoutCandidateDataInput {
  deleted: Boolean
  manager: UserUpdateOneWithoutManagerLikesInput
  job: JobUpdateOneWithoutLikesInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateWithoutJobDataInput {
  deleted: Boolean
  candidate: UserUpdateOneWithoutUserLikesInput
  manager: UserUpdateOneWithoutManagerLikesInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateWithoutManagerDataInput {
  deleted: Boolean
  candidate: UserUpdateOneWithoutUserLikesInput
  job: JobUpdateOneWithoutLikesInput
  match: MatchUpdateOneWithoutLikeInput
}

input LikeUpdateWithoutMatchDataInput {
  deleted: Boolean
  candidate: UserUpdateOneWithoutUserLikesInput
  manager: UserUpdateOneWithoutManagerLikesInput
  job: JobUpdateOneWithoutLikesInput
}

input LikeUpdateWithWhereUniqueWithoutCandidateInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutCandidateDataInput!
}

input LikeUpdateWithWhereUniqueWithoutJobInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutJobDataInput!
}

input LikeUpdateWithWhereUniqueWithoutManagerInput {
  where: LikeWhereUniqueInput!
  data: LikeUpdateWithoutManagerDataInput!
}

input LikeUpsertWithoutMatchInput {
  update: LikeUpdateWithoutMatchDataInput!
  create: LikeCreateWithoutMatchInput!
}

input LikeUpsertWithWhereUniqueWithoutCandidateInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutCandidateDataInput!
  create: LikeCreateWithoutCandidateInput!
}

input LikeUpsertWithWhereUniqueWithoutJobInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutJobDataInput!
  create: LikeCreateWithoutJobInput!
}

input LikeUpsertWithWhereUniqueWithoutManagerInput {
  where: LikeWhereUniqueInput!
  update: LikeUpdateWithoutManagerDataInput!
  create: LikeCreateWithoutManagerInput!
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
  candidate: UserWhereInput
  manager: UserWhereInput
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
  like: Like!
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
  like: LikeCreateOneWithoutMatchInput!
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
  like: LikeUpdateOneRequiredWithoutMatchInput
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
  createCity(data: CityCreateInput!): City!
  createLike(data: LikeCreateInput!): Like!
  createMatch(data: MatchCreateInput!): Match!
  createJobStatus(data: JobStatusCreateInput!): JobStatus!
  createJob(data: JobCreateInput!): Job!
  createCompany(data: CompanyCreateInput!): Company!
  createSkill(data: SkillCreateInput!): Skill!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateCity(data: CityUpdateInput!, where: CityWhereUniqueInput!): City
  updateLike(data: LikeUpdateInput!, where: LikeWhereUniqueInput!): Like
  updateMatch(data: MatchUpdateInput!, where: MatchWhereUniqueInput!): Match
  updateJobStatus(data: JobStatusUpdateInput!, where: JobStatusWhereUniqueInput!): JobStatus
  updateJob(data: JobUpdateInput!, where: JobWhereUniqueInput!): Job
  updateCompany(data: CompanyUpdateInput!, where: CompanyWhereUniqueInput!): Company
  updateSkill(data: SkillUpdateInput!, where: SkillWhereUniqueInput!): Skill
  deleteUser(where: UserWhereUniqueInput!): User
  deleteCity(where: CityWhereUniqueInput!): City
  deleteLike(where: LikeWhereUniqueInput!): Like
  deleteMatch(where: MatchWhereUniqueInput!): Match
  deleteJobStatus(where: JobStatusWhereUniqueInput!): JobStatus
  deleteJob(where: JobWhereUniqueInput!): Job
  deleteCompany(where: CompanyWhereUniqueInput!): Company
  deleteSkill(where: SkillWhereUniqueInput!): Skill
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertCity(where: CityWhereUniqueInput!, create: CityCreateInput!, update: CityUpdateInput!): City!
  upsertLike(where: LikeWhereUniqueInput!, create: LikeCreateInput!, update: LikeUpdateInput!): Like!
  upsertMatch(where: MatchWhereUniqueInput!, create: MatchCreateInput!, update: MatchUpdateInput!): Match!
  upsertJobStatus(where: JobStatusWhereUniqueInput!, create: JobStatusCreateInput!, update: JobStatusUpdateInput!): JobStatus!
  upsertJob(where: JobWhereUniqueInput!, create: JobCreateInput!, update: JobUpdateInput!): Job!
  upsertCompany(where: CompanyWhereUniqueInput!, create: CompanyCreateInput!, update: CompanyUpdateInput!): Company!
  upsertSkill(where: SkillWhereUniqueInput!, create: SkillCreateInput!, update: SkillUpdateInput!): Skill!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyCities(data: CityUpdateManyMutationInput!, where: CityWhereInput): BatchPayload!
  updateManyLikes(data: LikeUpdateManyMutationInput!, where: LikeWhereInput): BatchPayload!
  updateManyMatches(data: MatchUpdateManyMutationInput!, where: MatchWhereInput): BatchPayload!
  updateManyJobStatuses(data: JobStatusUpdateManyMutationInput!, where: JobStatusWhereInput): BatchPayload!
  updateManyJobs(data: JobUpdateManyMutationInput!, where: JobWhereInput): BatchPayload!
  updateManyCompanies(data: CompanyUpdateManyMutationInput!, where: CompanyWhereInput): BatchPayload!
  updateManySkills(data: SkillUpdateManyMutationInput!, where: SkillWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyCities(where: CityWhereInput): BatchPayload!
  deleteManyLikes(where: LikeWhereInput): BatchPayload!
  deleteManyMatches(where: MatchWhereInput): BatchPayload!
  deleteManyJobStatuses(where: JobStatusWhereInput): BatchPayload!
  deleteManyJobs(where: JobWhereInput): BatchPayload!
  deleteManyCompanies(where: CompanyWhereInput): BatchPayload!
  deleteManySkills(where: SkillWhereInput): BatchPayload!
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
  cities(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [City]!
  likes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like]!
  matches(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Match]!
  jobStatuses(where: JobStatusWhereInput, orderBy: JobStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JobStatus]!
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job]!
  companies(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Company]!
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill]!
  user(where: UserWhereUniqueInput!): User
  city(where: CityWhereUniqueInput!): City
  like(where: LikeWhereUniqueInput!): Like
  match(where: MatchWhereUniqueInput!): Match
  jobStatus(where: JobStatusWhereUniqueInput!): JobStatus
  job(where: JobWhereUniqueInput!): Job
  company(where: CompanyWhereUniqueInput!): Company
  skill(where: SkillWhereUniqueInput!): Skill
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  citiesConnection(where: CityWhereInput, orderBy: CityOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CityConnection!
  likesConnection(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LikeConnection!
  matchesConnection(where: MatchWhereInput, orderBy: MatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MatchConnection!
  jobStatusesConnection(where: JobStatusWhereInput, orderBy: JobStatusOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobStatusConnection!
  jobsConnection(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JobConnection!
  companiesConnection(where: CompanyWhereInput, orderBy: CompanyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CompanyConnection!
  skillsConnection(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SkillConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Skill {
  id: UUID!
  name: String!
  description: String
  jobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type SkillConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SkillEdge]!
  aggregate: AggregateSkill!
}

input SkillCreateInput {
  id: UUID
  name: String!
  description: String
  jobs: JobCreateManyWithoutSkillsInput
  users: UserCreateManyWithoutSkillsInput
}

input SkillCreateManyWithoutJobsInput {
  create: [SkillCreateWithoutJobsInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateManyWithoutUsersInput {
  create: [SkillCreateWithoutUsersInput!]
  connect: [SkillWhereUniqueInput!]
}

input SkillCreateWithoutJobsInput {
  id: UUID
  name: String!
  description: String
  users: UserCreateManyWithoutSkillsInput
}

input SkillCreateWithoutUsersInput {
  id: UUID
  name: String!
  description: String
  jobs: JobCreateManyWithoutSkillsInput
}

"""An edge in a connection."""
type SkillEdge {
  """The item at the end of the edge."""
  node: Skill!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SkillOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
}

type SkillPreviousValues {
  id: UUID!
  name: String!
  description: String
}

input SkillScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [SkillScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SkillScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SkillScalarWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
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
}

type SkillSubscriptionPayload {
  mutation: MutationType!
  node: Skill
  updatedFields: [String!]
  previousValues: SkillPreviousValues
}

input SkillSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SkillSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SkillSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SkillSubscriptionWhereInput!]

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
  node: SkillWhereInput
}

input SkillUpdateInput {
  name: String
  description: String
  jobs: JobUpdateManyWithoutSkillsInput
  users: UserUpdateManyWithoutSkillsInput
}

input SkillUpdateManyDataInput {
  name: String
  description: String
}

input SkillUpdateManyMutationInput {
  name: String
  description: String
}

input SkillUpdateManyWithoutJobsInput {
  create: [SkillCreateWithoutJobsInput!]
  connect: [SkillWhereUniqueInput!]
  set: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  delete: [SkillWhereUniqueInput!]
  update: [SkillUpdateWithWhereUniqueWithoutJobsInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
  deleteMany: [SkillScalarWhereInput!]
  upsert: [SkillUpsertWithWhereUniqueWithoutJobsInput!]
}

input SkillUpdateManyWithoutUsersInput {
  create: [SkillCreateWithoutUsersInput!]
  connect: [SkillWhereUniqueInput!]
  set: [SkillWhereUniqueInput!]
  disconnect: [SkillWhereUniqueInput!]
  delete: [SkillWhereUniqueInput!]
  update: [SkillUpdateWithWhereUniqueWithoutUsersInput!]
  updateMany: [SkillUpdateManyWithWhereNestedInput!]
  deleteMany: [SkillScalarWhereInput!]
  upsert: [SkillUpsertWithWhereUniqueWithoutUsersInput!]
}

input SkillUpdateManyWithWhereNestedInput {
  where: SkillScalarWhereInput!
  data: SkillUpdateManyDataInput!
}

input SkillUpdateWithoutJobsDataInput {
  name: String
  description: String
  users: UserUpdateManyWithoutSkillsInput
}

input SkillUpdateWithoutUsersDataInput {
  name: String
  description: String
  jobs: JobUpdateManyWithoutSkillsInput
}

input SkillUpdateWithWhereUniqueWithoutJobsInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutJobsDataInput!
}

input SkillUpdateWithWhereUniqueWithoutUsersInput {
  where: SkillWhereUniqueInput!
  data: SkillUpdateWithoutUsersDataInput!
}

input SkillUpsertWithWhereUniqueWithoutJobsInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateWithoutJobsDataInput!
  create: SkillCreateWithoutJobsInput!
}

input SkillUpsertWithWhereUniqueWithoutUsersInput {
  where: SkillWhereUniqueInput!
  update: SkillUpdateWithoutUsersDataInput!
  create: SkillCreateWithoutUsersInput!
}

input SkillWhereInput {
  """Logical AND on all given filters."""
  AND: [SkillWhereInput!]

  """Logical OR on all given filters."""
  OR: [SkillWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SkillWhereInput!]
  id: UUID

  """All values that are not equal to given value."""
  id_not: UUID

  """All values that are contained in given list."""
  id_in: [UUID!]

  """All values that are not contained in given list."""
  id_not_in: [UUID!]
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
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
  jobs_every: JobWhereInput
  jobs_some: JobWhereInput
  jobs_none: JobWhereInput
  users_every: UserWhereInput
  users_some: UserWhereInput
  users_none: UserWhereInput
}

input SkillWhereUniqueInput {
  id: UUID
  name: String
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  city(where: CitySubscriptionWhereInput): CitySubscriptionPayload
  like(where: LikeSubscriptionWhereInput): LikeSubscriptionPayload
  match(where: MatchSubscriptionWhereInput): MatchSubscriptionPayload
  jobStatus(where: JobStatusSubscriptionWhereInput): JobStatusSubscriptionPayload
  job(where: JobSubscriptionWhereInput): JobSubscriptionPayload
  company(where: CompanySubscriptionWhereInput): CompanySubscriptionPayload
  skill(where: SkillSubscriptionWhereInput): SkillSubscriptionPayload
}

type User {
  id: UUID!
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  userLikes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  managerLikes(where: LikeWhereInput, orderBy: LikeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Like!]
  city: City!
  company: Company
  skills(where: SkillWhereInput, orderBy: SkillOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Skill!]
  managedJobs(where: JobWhereInput, orderBy: JobOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Job!]
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
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  userLikes: LikeCreateManyWithoutCandidateInput
  managerLikes: LikeCreateManyWithoutManagerInput
  city: CityCreateOneWithoutUsersInput!
  company: CompanyCreateOneWithoutUsersInput
  skills: SkillCreateManyWithoutUsersInput
  managedJobs: JobCreateManyWithoutManagerInput
}

input UserCreateManyWithoutCityInput {
  create: [UserCreateWithoutCityInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutCompanyInput {
  create: [UserCreateWithoutCompanyInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutSkillsInput {
  create: [UserCreateWithoutSkillsInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneWithoutManagedJobsInput {
  create: UserCreateWithoutManagedJobsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutManagerLikesInput {
  create: UserCreateWithoutManagerLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutUserLikesInput {
  create: UserCreateWithoutUserLikesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCityInput {
  id: UUID
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  userLikes: LikeCreateManyWithoutCandidateInput
  managerLikes: LikeCreateManyWithoutManagerInput
  company: CompanyCreateOneWithoutUsersInput
  skills: SkillCreateManyWithoutUsersInput
  managedJobs: JobCreateManyWithoutManagerInput
}

input UserCreateWithoutCompanyInput {
  id: UUID
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  userLikes: LikeCreateManyWithoutCandidateInput
  managerLikes: LikeCreateManyWithoutManagerInput
  city: CityCreateOneWithoutUsersInput!
  skills: SkillCreateManyWithoutUsersInput
  managedJobs: JobCreateManyWithoutManagerInput
}

input UserCreateWithoutManagedJobsInput {
  id: UUID
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  userLikes: LikeCreateManyWithoutCandidateInput
  managerLikes: LikeCreateManyWithoutManagerInput
  city: CityCreateOneWithoutUsersInput!
  company: CompanyCreateOneWithoutUsersInput
  skills: SkillCreateManyWithoutUsersInput
}

input UserCreateWithoutManagerLikesInput {
  id: UUID
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  userLikes: LikeCreateManyWithoutCandidateInput
  city: CityCreateOneWithoutUsersInput!
  company: CompanyCreateOneWithoutUsersInput
  skills: SkillCreateManyWithoutUsersInput
  managedJobs: JobCreateManyWithoutManagerInput
}

input UserCreateWithoutSkillsInput {
  id: UUID
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  userLikes: LikeCreateManyWithoutCandidateInput
  managerLikes: LikeCreateManyWithoutManagerInput
  city: CityCreateOneWithoutUsersInput!
  company: CompanyCreateOneWithoutUsersInput
  managedJobs: JobCreateManyWithoutManagerInput
}

input UserCreateWithoutUserLikesInput {
  id: UUID
  email: String!
  password: String!
  avatarUrl: String!
  rating: Float!
  deleted: Boolean
  managerLikes: LikeCreateManyWithoutManagerInput
  city: CityCreateOneWithoutUsersInput!
  company: CompanyCreateOneWithoutUsersInput
  skills: SkillCreateManyWithoutUsersInput
  managedJobs: JobCreateManyWithoutManagerInput
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
  avatarUrl_ASC
  avatarUrl_DESC
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
  avatarUrl: String!
  rating: Float!
  createdAt: DateTime!
  updatedAt: DateTime!
  deleted: Boolean!
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
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
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
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
  avatarUrl: String
  rating: Float
  deleted: Boolean
  userLikes: LikeUpdateManyWithoutCandidateInput
  managerLikes: LikeUpdateManyWithoutManagerInput
  city: CityUpdateOneRequiredWithoutUsersInput
  company: CompanyUpdateOneWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
  managedJobs: JobUpdateManyWithoutManagerInput
}

input UserUpdateManyDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
}

input UserUpdateManyWithoutCityInput {
  create: [UserCreateWithoutCityInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCityInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCityInput!]
}

input UserUpdateManyWithoutCompanyInput {
  create: [UserCreateWithoutCompanyInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutCompanyInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutCompanyInput!]
}

input UserUpdateManyWithoutSkillsInput {
  create: [UserCreateWithoutSkillsInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutSkillsInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutSkillsInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredWithoutManagedJobsInput {
  create: UserCreateWithoutManagedJobsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutManagedJobsDataInput
  upsert: UserUpsertWithoutManagedJobsInput
}

input UserUpdateOneWithoutManagerLikesInput {
  create: UserCreateWithoutManagerLikesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutManagerLikesDataInput
  upsert: UserUpsertWithoutManagerLikesInput
}

input UserUpdateOneWithoutUserLikesInput {
  create: UserCreateWithoutUserLikesInput
  connect: UserWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: UserUpdateWithoutUserLikesDataInput
  upsert: UserUpsertWithoutUserLikesInput
}

input UserUpdateWithoutCityDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
  userLikes: LikeUpdateManyWithoutCandidateInput
  managerLikes: LikeUpdateManyWithoutManagerInput
  company: CompanyUpdateOneWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
  managedJobs: JobUpdateManyWithoutManagerInput
}

input UserUpdateWithoutCompanyDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
  userLikes: LikeUpdateManyWithoutCandidateInput
  managerLikes: LikeUpdateManyWithoutManagerInput
  city: CityUpdateOneRequiredWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
  managedJobs: JobUpdateManyWithoutManagerInput
}

input UserUpdateWithoutManagedJobsDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
  userLikes: LikeUpdateManyWithoutCandidateInput
  managerLikes: LikeUpdateManyWithoutManagerInput
  city: CityUpdateOneRequiredWithoutUsersInput
  company: CompanyUpdateOneWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
}

input UserUpdateWithoutManagerLikesDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
  userLikes: LikeUpdateManyWithoutCandidateInput
  city: CityUpdateOneRequiredWithoutUsersInput
  company: CompanyUpdateOneWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
  managedJobs: JobUpdateManyWithoutManagerInput
}

input UserUpdateWithoutSkillsDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
  userLikes: LikeUpdateManyWithoutCandidateInput
  managerLikes: LikeUpdateManyWithoutManagerInput
  city: CityUpdateOneRequiredWithoutUsersInput
  company: CompanyUpdateOneWithoutUsersInput
  managedJobs: JobUpdateManyWithoutManagerInput
}

input UserUpdateWithoutUserLikesDataInput {
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted: Boolean
  managerLikes: LikeUpdateManyWithoutManagerInput
  city: CityUpdateOneRequiredWithoutUsersInput
  company: CompanyUpdateOneWithoutUsersInput
  skills: SkillUpdateManyWithoutUsersInput
  managedJobs: JobUpdateManyWithoutManagerInput
}

input UserUpdateWithWhereUniqueWithoutCityInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCityDataInput!
}

input UserUpdateWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutCompanyDataInput!
}

input UserUpdateWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutSkillsDataInput!
}

input UserUpsertWithoutManagedJobsInput {
  update: UserUpdateWithoutManagedJobsDataInput!
  create: UserCreateWithoutManagedJobsInput!
}

input UserUpsertWithoutManagerLikesInput {
  update: UserUpdateWithoutManagerLikesDataInput!
  create: UserCreateWithoutManagerLikesInput!
}

input UserUpsertWithoutUserLikesInput {
  update: UserUpdateWithoutUserLikesDataInput!
  create: UserCreateWithoutUserLikesInput!
}

input UserUpsertWithWhereUniqueWithoutCityInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCityDataInput!
  create: UserCreateWithoutCityInput!
}

input UserUpsertWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutCompanyDataInput!
  create: UserCreateWithoutCompanyInput!
}

input UserUpsertWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutSkillsDataInput!
  create: UserCreateWithoutSkillsInput!
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
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
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
  userLikes_every: LikeWhereInput
  userLikes_some: LikeWhereInput
  userLikes_none: LikeWhereInput
  managerLikes_every: LikeWhereInput
  managerLikes_some: LikeWhereInput
  managerLikes_none: LikeWhereInput
  city: CityWhereInput
  company: CompanyWhereInput
  skills_every: SkillWhereInput
  skills_some: SkillWhereInput
  skills_none: SkillWhereInput
  managedJobs_every: JobWhereInput
  managedJobs_some: JobWhereInput
  managedJobs_none: JobWhereInput
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

export type CityOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type CompanyOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'legalName_ASC' |
  'legalName_DESC' |
  'avatarUrl_ASC' |
  'avatarUrl_DESC'

export type JobOrderByInput =   'id_ASC' |
  'id_DESC' |
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
  'matchThreshold_ASC' |
  'matchThreshold_DESC' |
  'tags_ASC' |
  'tags_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export type JobStatusOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

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

export type SkillOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'avatarUrl_ASC' |
  'avatarUrl_DESC' |
  'rating_ASC' |
  'rating_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'deleted_ASC' |
  'deleted_DESC'

export interface CityCreateInput {
  id?: UUID | null
  name: String
  deleted?: Boolean | null
  users?: UserCreateManyWithoutCityInput | null
  jobs?: JobCreateManyWithoutCityInput | null
}

export interface CityCreateOneWithoutJobsInput {
  create?: CityCreateWithoutJobsInput | null
  connect?: CityWhereUniqueInput | null
}

export interface CityCreateOneWithoutUsersInput {
  create?: CityCreateWithoutUsersInput | null
  connect?: CityWhereUniqueInput | null
}

export interface CityCreateWithoutJobsInput {
  id?: UUID | null
  name: String
  deleted?: Boolean | null
  users?: UserCreateManyWithoutCityInput | null
}

export interface CityCreateWithoutUsersInput {
  id?: UUID | null
  name: String
  deleted?: Boolean | null
  jobs?: JobCreateManyWithoutCityInput | null
}

export interface CitySubscriptionWhereInput {
  AND?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput | null
  OR?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput | null
  NOT?: CitySubscriptionWhereInput[] | CitySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CityWhereInput | null
}

export interface CityUpdateInput {
  name?: String | null
  deleted?: Boolean | null
  users?: UserUpdateManyWithoutCityInput | null
  jobs?: JobUpdateManyWithoutCityInput | null
}

export interface CityUpdateManyMutationInput {
  name?: String | null
  deleted?: Boolean | null
}

export interface CityUpdateOneRequiredWithoutJobsInput {
  create?: CityCreateWithoutJobsInput | null
  connect?: CityWhereUniqueInput | null
  update?: CityUpdateWithoutJobsDataInput | null
  upsert?: CityUpsertWithoutJobsInput | null
}

export interface CityUpdateOneRequiredWithoutUsersInput {
  create?: CityCreateWithoutUsersInput | null
  connect?: CityWhereUniqueInput | null
  update?: CityUpdateWithoutUsersDataInput | null
  upsert?: CityUpsertWithoutUsersInput | null
}

export interface CityUpdateWithoutJobsDataInput {
  name?: String | null
  deleted?: Boolean | null
  users?: UserUpdateManyWithoutCityInput | null
}

export interface CityUpdateWithoutUsersDataInput {
  name?: String | null
  deleted?: Boolean | null
  jobs?: JobUpdateManyWithoutCityInput | null
}

export interface CityUpsertWithoutJobsInput {
  update: CityUpdateWithoutJobsDataInput
  create: CityCreateWithoutJobsInput
}

export interface CityUpsertWithoutUsersInput {
  update: CityUpdateWithoutUsersDataInput
  create: CityCreateWithoutUsersInput
}

export interface CityWhereInput {
  AND?: CityWhereInput[] | CityWhereInput | null
  OR?: CityWhereInput[] | CityWhereInput | null
  NOT?: CityWhereInput[] | CityWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
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
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
}

export interface CityWhereUniqueInput {
  id?: UUID | null
  name?: String | null
}

export interface CompanyCreateInput {
  id?: UUID | null
  name: String
  legalName: String
  avatarUrl: String
  jobs?: JobCreateManyWithoutCompanyInput | null
  users?: UserCreateManyWithoutCompanyInput | null
}

export interface CompanyCreateOneWithoutJobsInput {
  create?: CompanyCreateWithoutJobsInput | null
  connect?: CompanyWhereUniqueInput | null
}

export interface CompanyCreateOneWithoutUsersInput {
  create?: CompanyCreateWithoutUsersInput | null
  connect?: CompanyWhereUniqueInput | null
}

export interface CompanyCreateWithoutJobsInput {
  id?: UUID | null
  name: String
  legalName: String
  avatarUrl: String
  users?: UserCreateManyWithoutCompanyInput | null
}

export interface CompanyCreateWithoutUsersInput {
  id?: UUID | null
  name: String
  legalName: String
  avatarUrl: String
  jobs?: JobCreateManyWithoutCompanyInput | null
}

export interface CompanySubscriptionWhereInput {
  AND?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput | null
  OR?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput | null
  NOT?: CompanySubscriptionWhereInput[] | CompanySubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: CompanyWhereInput | null
}

export interface CompanyUpdateInput {
  name?: String | null
  legalName?: String | null
  avatarUrl?: String | null
  jobs?: JobUpdateManyWithoutCompanyInput | null
  users?: UserUpdateManyWithoutCompanyInput | null
}

export interface CompanyUpdateManyMutationInput {
  name?: String | null
  legalName?: String | null
  avatarUrl?: String | null
}

export interface CompanyUpdateOneRequiredWithoutJobsInput {
  create?: CompanyCreateWithoutJobsInput | null
  connect?: CompanyWhereUniqueInput | null
  update?: CompanyUpdateWithoutJobsDataInput | null
  upsert?: CompanyUpsertWithoutJobsInput | null
}

export interface CompanyUpdateOneWithoutUsersInput {
  create?: CompanyCreateWithoutUsersInput | null
  connect?: CompanyWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: CompanyUpdateWithoutUsersDataInput | null
  upsert?: CompanyUpsertWithoutUsersInput | null
}

export interface CompanyUpdateWithoutJobsDataInput {
  name?: String | null
  legalName?: String | null
  avatarUrl?: String | null
  users?: UserUpdateManyWithoutCompanyInput | null
}

export interface CompanyUpdateWithoutUsersDataInput {
  name?: String | null
  legalName?: String | null
  avatarUrl?: String | null
  jobs?: JobUpdateManyWithoutCompanyInput | null
}

export interface CompanyUpsertWithoutJobsInput {
  update: CompanyUpdateWithoutJobsDataInput
  create: CompanyCreateWithoutJobsInput
}

export interface CompanyUpsertWithoutUsersInput {
  update: CompanyUpdateWithoutUsersDataInput
  create: CompanyCreateWithoutUsersInput
}

export interface CompanyWhereInput {
  AND?: CompanyWhereInput[] | CompanyWhereInput | null
  OR?: CompanyWhereInput[] | CompanyWhereInput | null
  NOT?: CompanyWhereInput[] | CompanyWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  legalName?: String | null
  legalName_not?: String | null
  legalName_in?: String[] | String | null
  legalName_not_in?: String[] | String | null
  legalName_lt?: String | null
  legalName_lte?: String | null
  legalName_gt?: String | null
  legalName_gte?: String | null
  legalName_contains?: String | null
  legalName_not_contains?: String | null
  legalName_starts_with?: String | null
  legalName_not_starts_with?: String | null
  legalName_ends_with?: String | null
  legalName_not_ends_with?: String | null
  avatarUrl?: String | null
  avatarUrl_not?: String | null
  avatarUrl_in?: String[] | String | null
  avatarUrl_not_in?: String[] | String | null
  avatarUrl_lt?: String | null
  avatarUrl_lte?: String | null
  avatarUrl_gt?: String | null
  avatarUrl_gte?: String | null
  avatarUrl_contains?: String | null
  avatarUrl_not_contains?: String | null
  avatarUrl_starts_with?: String | null
  avatarUrl_not_starts_with?: String | null
  avatarUrl_ends_with?: String | null
  avatarUrl_not_ends_with?: String | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
}

export interface CompanyWhereUniqueInput {
  id?: UUID | null
}

export interface JobCreateInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  manager: UserCreateOneWithoutManagedJobsInput
  city: CityCreateOneWithoutJobsInput
  status: JobStatusCreateOneWithoutJobsInput
  company: CompanyCreateOneWithoutJobsInput
  skills?: SkillCreateManyWithoutJobsInput | null
  likes?: LikeCreateManyWithoutJobInput | null
}

export interface JobCreateManyWithoutCityInput {
  create?: JobCreateWithoutCityInput[] | JobCreateWithoutCityInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateManyWithoutCompanyInput {
  create?: JobCreateWithoutCompanyInput[] | JobCreateWithoutCompanyInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateManyWithoutManagerInput {
  create?: JobCreateWithoutManagerInput[] | JobCreateWithoutManagerInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateManyWithoutSkillsInput {
  create?: JobCreateWithoutSkillsInput[] | JobCreateWithoutSkillsInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateManyWithoutStatusInput {
  create?: JobCreateWithoutStatusInput[] | JobCreateWithoutStatusInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
}

export interface JobCreateOneWithoutLikesInput {
  create?: JobCreateWithoutLikesInput | null
  connect?: JobWhereUniqueInput | null
}

export interface JobCreateWithoutCityInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  manager: UserCreateOneWithoutManagedJobsInput
  status: JobStatusCreateOneWithoutJobsInput
  company: CompanyCreateOneWithoutJobsInput
  skills?: SkillCreateManyWithoutJobsInput | null
  likes?: LikeCreateManyWithoutJobInput | null
}

export interface JobCreateWithoutCompanyInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  manager: UserCreateOneWithoutManagedJobsInput
  city: CityCreateOneWithoutJobsInput
  status: JobStatusCreateOneWithoutJobsInput
  skills?: SkillCreateManyWithoutJobsInput | null
  likes?: LikeCreateManyWithoutJobInput | null
}

export interface JobCreateWithoutLikesInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  manager: UserCreateOneWithoutManagedJobsInput
  city: CityCreateOneWithoutJobsInput
  status: JobStatusCreateOneWithoutJobsInput
  company: CompanyCreateOneWithoutJobsInput
  skills?: SkillCreateManyWithoutJobsInput | null
}

export interface JobCreateWithoutManagerInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  city: CityCreateOneWithoutJobsInput
  status: JobStatusCreateOneWithoutJobsInput
  company: CompanyCreateOneWithoutJobsInput
  skills?: SkillCreateManyWithoutJobsInput | null
  likes?: LikeCreateManyWithoutJobInput | null
}

export interface JobCreateWithoutSkillsInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  manager: UserCreateOneWithoutManagedJobsInput
  city: CityCreateOneWithoutJobsInput
  status: JobStatusCreateOneWithoutJobsInput
  company: CompanyCreateOneWithoutJobsInput
  likes?: LikeCreateManyWithoutJobInput | null
}

export interface JobCreateWithoutStatusInput {
  id?: UUID | null
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  deleted?: Boolean | null
  manager: UserCreateOneWithoutManagedJobsInput
  city: CityCreateOneWithoutJobsInput
  company: CompanyCreateOneWithoutJobsInput
  skills?: SkillCreateManyWithoutJobsInput | null
  likes?: LikeCreateManyWithoutJobInput | null
}

export interface JobScalarWhereInput {
  AND?: JobScalarWhereInput[] | JobScalarWhereInput | null
  OR?: JobScalarWhereInput[] | JobScalarWhereInput | null
  NOT?: JobScalarWhereInput[] | JobScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
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
  matchThreshold?: Float | null
  matchThreshold_not?: Float | null
  matchThreshold_in?: Float[] | Float | null
  matchThreshold_not_in?: Float[] | Float | null
  matchThreshold_lt?: Float | null
  matchThreshold_lte?: Float | null
  matchThreshold_gt?: Float | null
  matchThreshold_gte?: Float | null
  tags?: String | null
  tags_not?: String | null
  tags_in?: String[] | String | null
  tags_not_in?: String[] | String | null
  tags_lt?: String | null
  tags_lte?: String | null
  tags_gt?: String | null
  tags_gte?: String | null
  tags_contains?: String | null
  tags_not_contains?: String | null
  tags_starts_with?: String | null
  tags_not_starts_with?: String | null
  tags_ends_with?: String | null
  tags_not_ends_with?: String | null
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

export interface JobStatusCreateInput {
  id?: UUID | null
  name: String
  jobs?: JobCreateManyWithoutStatusInput | null
}

export interface JobStatusCreateOneWithoutJobsInput {
  create?: JobStatusCreateWithoutJobsInput | null
  connect?: JobStatusWhereUniqueInput | null
}

export interface JobStatusCreateWithoutJobsInput {
  id?: UUID | null
  name: String
}

export interface JobStatusSubscriptionWhereInput {
  AND?: JobStatusSubscriptionWhereInput[] | JobStatusSubscriptionWhereInput | null
  OR?: JobStatusSubscriptionWhereInput[] | JobStatusSubscriptionWhereInput | null
  NOT?: JobStatusSubscriptionWhereInput[] | JobStatusSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: JobStatusWhereInput | null
}

export interface JobStatusUpdateInput {
  name?: String | null
  jobs?: JobUpdateManyWithoutStatusInput | null
}

export interface JobStatusUpdateManyMutationInput {
  name?: String | null
}

export interface JobStatusUpdateOneRequiredWithoutJobsInput {
  create?: JobStatusCreateWithoutJobsInput | null
  connect?: JobStatusWhereUniqueInput | null
  update?: JobStatusUpdateWithoutJobsDataInput | null
  upsert?: JobStatusUpsertWithoutJobsInput | null
}

export interface JobStatusUpdateWithoutJobsDataInput {
  name?: String | null
}

export interface JobStatusUpsertWithoutJobsInput {
  update: JobStatusUpdateWithoutJobsDataInput
  create: JobStatusCreateWithoutJobsInput
}

export interface JobStatusWhereInput {
  AND?: JobStatusWhereInput[] | JobStatusWhereInput | null
  OR?: JobStatusWhereInput[] | JobStatusWhereInput | null
  NOT?: JobStatusWhereInput[] | JobStatusWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
}

export interface JobStatusWhereUniqueInput {
  id?: UUID | null
  name?: String | null
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
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  manager?: UserUpdateOneRequiredWithoutManagedJobsInput | null
  city?: CityUpdateOneRequiredWithoutJobsInput | null
  status?: JobStatusUpdateOneRequiredWithoutJobsInput | null
  company?: CompanyUpdateOneRequiredWithoutJobsInput | null
  skills?: SkillUpdateManyWithoutJobsInput | null
  likes?: LikeUpdateManyWithoutJobInput | null
}

export interface JobUpdateManyDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
}

export interface JobUpdateManyMutationInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
}

export interface JobUpdateManyWithoutCityInput {
  create?: JobCreateWithoutCityInput[] | JobCreateWithoutCityInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  set?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutCityInput[] | JobUpdateWithWhereUniqueWithoutCityInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutCityInput[] | JobUpsertWithWhereUniqueWithoutCityInput | null
}

export interface JobUpdateManyWithoutCompanyInput {
  create?: JobCreateWithoutCompanyInput[] | JobCreateWithoutCompanyInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  set?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutCompanyInput[] | JobUpdateWithWhereUniqueWithoutCompanyInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutCompanyInput[] | JobUpsertWithWhereUniqueWithoutCompanyInput | null
}

export interface JobUpdateManyWithoutManagerInput {
  create?: JobCreateWithoutManagerInput[] | JobCreateWithoutManagerInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  set?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutManagerInput[] | JobUpdateWithWhereUniqueWithoutManagerInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutManagerInput[] | JobUpsertWithWhereUniqueWithoutManagerInput | null
}

export interface JobUpdateManyWithoutSkillsInput {
  create?: JobCreateWithoutSkillsInput[] | JobCreateWithoutSkillsInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  set?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutSkillsInput[] | JobUpdateWithWhereUniqueWithoutSkillsInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutSkillsInput[] | JobUpsertWithWhereUniqueWithoutSkillsInput | null
}

export interface JobUpdateManyWithoutStatusInput {
  create?: JobCreateWithoutStatusInput[] | JobCreateWithoutStatusInput | null
  connect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  set?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  disconnect?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  delete?: JobWhereUniqueInput[] | JobWhereUniqueInput | null
  update?: JobUpdateWithWhereUniqueWithoutStatusInput[] | JobUpdateWithWhereUniqueWithoutStatusInput | null
  updateMany?: JobUpdateManyWithWhereNestedInput[] | JobUpdateManyWithWhereNestedInput | null
  deleteMany?: JobScalarWhereInput[] | JobScalarWhereInput | null
  upsert?: JobUpsertWithWhereUniqueWithoutStatusInput[] | JobUpsertWithWhereUniqueWithoutStatusInput | null
}

export interface JobUpdateManyWithWhereNestedInput {
  where: JobScalarWhereInput
  data: JobUpdateManyDataInput
}

export interface JobUpdateOneWithoutLikesInput {
  create?: JobCreateWithoutLikesInput | null
  connect?: JobWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: JobUpdateWithoutLikesDataInput | null
  upsert?: JobUpsertWithoutLikesInput | null
}

export interface JobUpdateWithoutCityDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  manager?: UserUpdateOneRequiredWithoutManagedJobsInput | null
  status?: JobStatusUpdateOneRequiredWithoutJobsInput | null
  company?: CompanyUpdateOneRequiredWithoutJobsInput | null
  skills?: SkillUpdateManyWithoutJobsInput | null
  likes?: LikeUpdateManyWithoutJobInput | null
}

export interface JobUpdateWithoutCompanyDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  manager?: UserUpdateOneRequiredWithoutManagedJobsInput | null
  city?: CityUpdateOneRequiredWithoutJobsInput | null
  status?: JobStatusUpdateOneRequiredWithoutJobsInput | null
  skills?: SkillUpdateManyWithoutJobsInput | null
  likes?: LikeUpdateManyWithoutJobInput | null
}

export interface JobUpdateWithoutLikesDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  manager?: UserUpdateOneRequiredWithoutManagedJobsInput | null
  city?: CityUpdateOneRequiredWithoutJobsInput | null
  status?: JobStatusUpdateOneRequiredWithoutJobsInput | null
  company?: CompanyUpdateOneRequiredWithoutJobsInput | null
  skills?: SkillUpdateManyWithoutJobsInput | null
}

export interface JobUpdateWithoutManagerDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  city?: CityUpdateOneRequiredWithoutJobsInput | null
  status?: JobStatusUpdateOneRequiredWithoutJobsInput | null
  company?: CompanyUpdateOneRequiredWithoutJobsInput | null
  skills?: SkillUpdateManyWithoutJobsInput | null
  likes?: LikeUpdateManyWithoutJobInput | null
}

export interface JobUpdateWithoutSkillsDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  manager?: UserUpdateOneRequiredWithoutManagedJobsInput | null
  city?: CityUpdateOneRequiredWithoutJobsInput | null
  status?: JobStatusUpdateOneRequiredWithoutJobsInput | null
  company?: CompanyUpdateOneRequiredWithoutJobsInput | null
  likes?: LikeUpdateManyWithoutJobInput | null
}

export interface JobUpdateWithoutStatusDataInput {
  title?: String | null
  description?: String | null
  weekHours?: Int | null
  weekDays?: String | null
  remuneration?: Float | null
  matchThreshold?: Float | null
  tags?: String | null
  deleted?: Boolean | null
  manager?: UserUpdateOneRequiredWithoutManagedJobsInput | null
  city?: CityUpdateOneRequiredWithoutJobsInput | null
  company?: CompanyUpdateOneRequiredWithoutJobsInput | null
  skills?: SkillUpdateManyWithoutJobsInput | null
  likes?: LikeUpdateManyWithoutJobInput | null
}

export interface JobUpdateWithWhereUniqueWithoutCityInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutCityDataInput
}

export interface JobUpdateWithWhereUniqueWithoutCompanyInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutCompanyDataInput
}

export interface JobUpdateWithWhereUniqueWithoutManagerInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutManagerDataInput
}

export interface JobUpdateWithWhereUniqueWithoutSkillsInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutSkillsDataInput
}

export interface JobUpdateWithWhereUniqueWithoutStatusInput {
  where: JobWhereUniqueInput
  data: JobUpdateWithoutStatusDataInput
}

export interface JobUpsertWithoutLikesInput {
  update: JobUpdateWithoutLikesDataInput
  create: JobCreateWithoutLikesInput
}

export interface JobUpsertWithWhereUniqueWithoutCityInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutCityDataInput
  create: JobCreateWithoutCityInput
}

export interface JobUpsertWithWhereUniqueWithoutCompanyInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutCompanyDataInput
  create: JobCreateWithoutCompanyInput
}

export interface JobUpsertWithWhereUniqueWithoutManagerInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutManagerDataInput
  create: JobCreateWithoutManagerInput
}

export interface JobUpsertWithWhereUniqueWithoutSkillsInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutSkillsDataInput
  create: JobCreateWithoutSkillsInput
}

export interface JobUpsertWithWhereUniqueWithoutStatusInput {
  where: JobWhereUniqueInput
  update: JobUpdateWithoutStatusDataInput
  create: JobCreateWithoutStatusInput
}

export interface JobWhereInput {
  AND?: JobWhereInput[] | JobWhereInput | null
  OR?: JobWhereInput[] | JobWhereInput | null
  NOT?: JobWhereInput[] | JobWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
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
  matchThreshold?: Float | null
  matchThreshold_not?: Float | null
  matchThreshold_in?: Float[] | Float | null
  matchThreshold_not_in?: Float[] | Float | null
  matchThreshold_lt?: Float | null
  matchThreshold_lte?: Float | null
  matchThreshold_gt?: Float | null
  matchThreshold_gte?: Float | null
  tags?: String | null
  tags_not?: String | null
  tags_in?: String[] | String | null
  tags_not_in?: String[] | String | null
  tags_lt?: String | null
  tags_lte?: String | null
  tags_gt?: String | null
  tags_gte?: String | null
  tags_contains?: String | null
  tags_not_contains?: String | null
  tags_starts_with?: String | null
  tags_not_starts_with?: String | null
  tags_ends_with?: String | null
  tags_not_ends_with?: String | null
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
  manager?: UserWhereInput | null
  city?: CityWhereInput | null
  status?: JobStatusWhereInput | null
  company?: CompanyWhereInput | null
  skills_every?: SkillWhereInput | null
  skills_some?: SkillWhereInput | null
  skills_none?: SkillWhereInput | null
  likes_every?: LikeWhereInput | null
  likes_some?: LikeWhereInput | null
  likes_none?: LikeWhereInput | null
}

export interface JobWhereUniqueInput {
  id?: UUID | null
}

export interface LikeCreateInput {
  id?: UUID | null
  deleted?: Boolean | null
  candidate?: UserCreateOneWithoutUserLikesInput | null
  manager?: UserCreateOneWithoutManagerLikesInput | null
  job?: JobCreateOneWithoutLikesInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeCreateManyWithoutCandidateInput {
  create?: LikeCreateWithoutCandidateInput[] | LikeCreateWithoutCandidateInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateManyWithoutJobInput {
  create?: LikeCreateWithoutJobInput[] | LikeCreateWithoutJobInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateManyWithoutManagerInput {
  create?: LikeCreateWithoutManagerInput[] | LikeCreateWithoutManagerInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
}

export interface LikeCreateOneWithoutMatchInput {
  create?: LikeCreateWithoutMatchInput | null
  connect?: LikeWhereUniqueInput | null
}

export interface LikeCreateWithoutCandidateInput {
  id?: UUID | null
  deleted?: Boolean | null
  manager?: UserCreateOneWithoutManagerLikesInput | null
  job?: JobCreateOneWithoutLikesInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeCreateWithoutJobInput {
  id?: UUID | null
  deleted?: Boolean | null
  candidate?: UserCreateOneWithoutUserLikesInput | null
  manager?: UserCreateOneWithoutManagerLikesInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeCreateWithoutManagerInput {
  id?: UUID | null
  deleted?: Boolean | null
  candidate?: UserCreateOneWithoutUserLikesInput | null
  job?: JobCreateOneWithoutLikesInput | null
  match?: MatchCreateOneWithoutLikeInput | null
}

export interface LikeCreateWithoutMatchInput {
  id?: UUID | null
  deleted?: Boolean | null
  candidate?: UserCreateOneWithoutUserLikesInput | null
  manager?: UserCreateOneWithoutManagerLikesInput | null
  job?: JobCreateOneWithoutLikesInput | null
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
  candidate?: UserUpdateOneWithoutUserLikesInput | null
  manager?: UserUpdateOneWithoutManagerLikesInput | null
  job?: JobUpdateOneWithoutLikesInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateManyDataInput {
  deleted?: Boolean | null
}

export interface LikeUpdateManyMutationInput {
  deleted?: Boolean | null
}

export interface LikeUpdateManyWithoutCandidateInput {
  create?: LikeCreateWithoutCandidateInput[] | LikeCreateWithoutCandidateInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  set?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutCandidateInput[] | LikeUpdateWithWhereUniqueWithoutCandidateInput | null
  updateMany?: LikeUpdateManyWithWhereNestedInput[] | LikeUpdateManyWithWhereNestedInput | null
  deleteMany?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutCandidateInput[] | LikeUpsertWithWhereUniqueWithoutCandidateInput | null
}

export interface LikeUpdateManyWithoutJobInput {
  create?: LikeCreateWithoutJobInput[] | LikeCreateWithoutJobInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  set?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutJobInput[] | LikeUpdateWithWhereUniqueWithoutJobInput | null
  updateMany?: LikeUpdateManyWithWhereNestedInput[] | LikeUpdateManyWithWhereNestedInput | null
  deleteMany?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutJobInput[] | LikeUpsertWithWhereUniqueWithoutJobInput | null
}

export interface LikeUpdateManyWithoutManagerInput {
  create?: LikeCreateWithoutManagerInput[] | LikeCreateWithoutManagerInput | null
  connect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  set?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  disconnect?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  delete?: LikeWhereUniqueInput[] | LikeWhereUniqueInput | null
  update?: LikeUpdateWithWhereUniqueWithoutManagerInput[] | LikeUpdateWithWhereUniqueWithoutManagerInput | null
  updateMany?: LikeUpdateManyWithWhereNestedInput[] | LikeUpdateManyWithWhereNestedInput | null
  deleteMany?: LikeScalarWhereInput[] | LikeScalarWhereInput | null
  upsert?: LikeUpsertWithWhereUniqueWithoutManagerInput[] | LikeUpsertWithWhereUniqueWithoutManagerInput | null
}

export interface LikeUpdateManyWithWhereNestedInput {
  where: LikeScalarWhereInput
  data: LikeUpdateManyDataInput
}

export interface LikeUpdateOneRequiredWithoutMatchInput {
  create?: LikeCreateWithoutMatchInput | null
  connect?: LikeWhereUniqueInput | null
  update?: LikeUpdateWithoutMatchDataInput | null
  upsert?: LikeUpsertWithoutMatchInput | null
}

export interface LikeUpdateWithoutCandidateDataInput {
  deleted?: Boolean | null
  manager?: UserUpdateOneWithoutManagerLikesInput | null
  job?: JobUpdateOneWithoutLikesInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateWithoutJobDataInput {
  deleted?: Boolean | null
  candidate?: UserUpdateOneWithoutUserLikesInput | null
  manager?: UserUpdateOneWithoutManagerLikesInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateWithoutManagerDataInput {
  deleted?: Boolean | null
  candidate?: UserUpdateOneWithoutUserLikesInput | null
  job?: JobUpdateOneWithoutLikesInput | null
  match?: MatchUpdateOneWithoutLikeInput | null
}

export interface LikeUpdateWithoutMatchDataInput {
  deleted?: Boolean | null
  candidate?: UserUpdateOneWithoutUserLikesInput | null
  manager?: UserUpdateOneWithoutManagerLikesInput | null
  job?: JobUpdateOneWithoutLikesInput | null
}

export interface LikeUpdateWithWhereUniqueWithoutCandidateInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutCandidateDataInput
}

export interface LikeUpdateWithWhereUniqueWithoutJobInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutJobDataInput
}

export interface LikeUpdateWithWhereUniqueWithoutManagerInput {
  where: LikeWhereUniqueInput
  data: LikeUpdateWithoutManagerDataInput
}

export interface LikeUpsertWithoutMatchInput {
  update: LikeUpdateWithoutMatchDataInput
  create: LikeCreateWithoutMatchInput
}

export interface LikeUpsertWithWhereUniqueWithoutCandidateInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutCandidateDataInput
  create: LikeCreateWithoutCandidateInput
}

export interface LikeUpsertWithWhereUniqueWithoutJobInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutJobDataInput
  create: LikeCreateWithoutJobInput
}

export interface LikeUpsertWithWhereUniqueWithoutManagerInput {
  where: LikeWhereUniqueInput
  update: LikeUpdateWithoutManagerDataInput
  create: LikeCreateWithoutManagerInput
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
  candidate?: UserWhereInput | null
  manager?: UserWhereInput | null
  job?: JobWhereInput | null
  match?: MatchWhereInput | null
}

export interface LikeWhereUniqueInput {
  id?: UUID | null
}

export interface MatchCreateInput {
  id?: UUID | null
  deleted?: Boolean | null
  like: LikeCreateOneWithoutMatchInput
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
  like?: LikeUpdateOneRequiredWithoutMatchInput | null
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

export interface SkillCreateInput {
  id?: UUID | null
  name: String
  description?: String | null
  jobs?: JobCreateManyWithoutSkillsInput | null
  users?: UserCreateManyWithoutSkillsInput | null
}

export interface SkillCreateManyWithoutJobsInput {
  create?: SkillCreateWithoutJobsInput[] | SkillCreateWithoutJobsInput | null
  connect?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
}

export interface SkillCreateManyWithoutUsersInput {
  create?: SkillCreateWithoutUsersInput[] | SkillCreateWithoutUsersInput | null
  connect?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
}

export interface SkillCreateWithoutJobsInput {
  id?: UUID | null
  name: String
  description?: String | null
  users?: UserCreateManyWithoutSkillsInput | null
}

export interface SkillCreateWithoutUsersInput {
  id?: UUID | null
  name: String
  description?: String | null
  jobs?: JobCreateManyWithoutSkillsInput | null
}

export interface SkillScalarWhereInput {
  AND?: SkillScalarWhereInput[] | SkillScalarWhereInput | null
  OR?: SkillScalarWhereInput[] | SkillScalarWhereInput | null
  NOT?: SkillScalarWhereInput[] | SkillScalarWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
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
}

export interface SkillSubscriptionWhereInput {
  AND?: SkillSubscriptionWhereInput[] | SkillSubscriptionWhereInput | null
  OR?: SkillSubscriptionWhereInput[] | SkillSubscriptionWhereInput | null
  NOT?: SkillSubscriptionWhereInput[] | SkillSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SkillWhereInput | null
}

export interface SkillUpdateInput {
  name?: String | null
  description?: String | null
  jobs?: JobUpdateManyWithoutSkillsInput | null
  users?: UserUpdateManyWithoutSkillsInput | null
}

export interface SkillUpdateManyDataInput {
  name?: String | null
  description?: String | null
}

export interface SkillUpdateManyMutationInput {
  name?: String | null
  description?: String | null
}

export interface SkillUpdateManyWithoutJobsInput {
  create?: SkillCreateWithoutJobsInput[] | SkillCreateWithoutJobsInput | null
  connect?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  set?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  disconnect?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  delete?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  update?: SkillUpdateWithWhereUniqueWithoutJobsInput[] | SkillUpdateWithWhereUniqueWithoutJobsInput | null
  updateMany?: SkillUpdateManyWithWhereNestedInput[] | SkillUpdateManyWithWhereNestedInput | null
  deleteMany?: SkillScalarWhereInput[] | SkillScalarWhereInput | null
  upsert?: SkillUpsertWithWhereUniqueWithoutJobsInput[] | SkillUpsertWithWhereUniqueWithoutJobsInput | null
}

export interface SkillUpdateManyWithoutUsersInput {
  create?: SkillCreateWithoutUsersInput[] | SkillCreateWithoutUsersInput | null
  connect?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  set?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  disconnect?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  delete?: SkillWhereUniqueInput[] | SkillWhereUniqueInput | null
  update?: SkillUpdateWithWhereUniqueWithoutUsersInput[] | SkillUpdateWithWhereUniqueWithoutUsersInput | null
  updateMany?: SkillUpdateManyWithWhereNestedInput[] | SkillUpdateManyWithWhereNestedInput | null
  deleteMany?: SkillScalarWhereInput[] | SkillScalarWhereInput | null
  upsert?: SkillUpsertWithWhereUniqueWithoutUsersInput[] | SkillUpsertWithWhereUniqueWithoutUsersInput | null
}

export interface SkillUpdateManyWithWhereNestedInput {
  where: SkillScalarWhereInput
  data: SkillUpdateManyDataInput
}

export interface SkillUpdateWithoutJobsDataInput {
  name?: String | null
  description?: String | null
  users?: UserUpdateManyWithoutSkillsInput | null
}

export interface SkillUpdateWithoutUsersDataInput {
  name?: String | null
  description?: String | null
  jobs?: JobUpdateManyWithoutSkillsInput | null
}

export interface SkillUpdateWithWhereUniqueWithoutJobsInput {
  where: SkillWhereUniqueInput
  data: SkillUpdateWithoutJobsDataInput
}

export interface SkillUpdateWithWhereUniqueWithoutUsersInput {
  where: SkillWhereUniqueInput
  data: SkillUpdateWithoutUsersDataInput
}

export interface SkillUpsertWithWhereUniqueWithoutJobsInput {
  where: SkillWhereUniqueInput
  update: SkillUpdateWithoutJobsDataInput
  create: SkillCreateWithoutJobsInput
}

export interface SkillUpsertWithWhereUniqueWithoutUsersInput {
  where: SkillWhereUniqueInput
  update: SkillUpdateWithoutUsersDataInput
  create: SkillCreateWithoutUsersInput
}

export interface SkillWhereInput {
  AND?: SkillWhereInput[] | SkillWhereInput | null
  OR?: SkillWhereInput[] | SkillWhereInput | null
  NOT?: SkillWhereInput[] | SkillWhereInput | null
  id?: UUID | null
  id_not?: UUID | null
  id_in?: UUID[] | UUID | null
  id_not_in?: UUID[] | UUID | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
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
  jobs_every?: JobWhereInput | null
  jobs_some?: JobWhereInput | null
  jobs_none?: JobWhereInput | null
  users_every?: UserWhereInput | null
  users_some?: UserWhereInput | null
  users_none?: UserWhereInput | null
}

export interface SkillWhereUniqueInput {
  id?: UUID | null
  name?: String | null
}

export interface UserCreateInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  userLikes?: LikeCreateManyWithoutCandidateInput | null
  managerLikes?: LikeCreateManyWithoutManagerInput | null
  city: CityCreateOneWithoutUsersInput
  company?: CompanyCreateOneWithoutUsersInput | null
  skills?: SkillCreateManyWithoutUsersInput | null
  managedJobs?: JobCreateManyWithoutManagerInput | null
}

export interface UserCreateManyWithoutCityInput {
  create?: UserCreateWithoutCityInput[] | UserCreateWithoutCityInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutCompanyInput {
  create?: UserCreateWithoutCompanyInput[] | UserCreateWithoutCompanyInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateManyWithoutSkillsInput {
  create?: UserCreateWithoutSkillsInput[] | UserCreateWithoutSkillsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutManagedJobsInput {
  create?: UserCreateWithoutManagedJobsInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutManagerLikesInput {
  create?: UserCreateWithoutManagerLikesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutUserLikesInput {
  create?: UserCreateWithoutUserLikesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutCityInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  userLikes?: LikeCreateManyWithoutCandidateInput | null
  managerLikes?: LikeCreateManyWithoutManagerInput | null
  company?: CompanyCreateOneWithoutUsersInput | null
  skills?: SkillCreateManyWithoutUsersInput | null
  managedJobs?: JobCreateManyWithoutManagerInput | null
}

export interface UserCreateWithoutCompanyInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  userLikes?: LikeCreateManyWithoutCandidateInput | null
  managerLikes?: LikeCreateManyWithoutManagerInput | null
  city: CityCreateOneWithoutUsersInput
  skills?: SkillCreateManyWithoutUsersInput | null
  managedJobs?: JobCreateManyWithoutManagerInput | null
}

export interface UserCreateWithoutManagedJobsInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  userLikes?: LikeCreateManyWithoutCandidateInput | null
  managerLikes?: LikeCreateManyWithoutManagerInput | null
  city: CityCreateOneWithoutUsersInput
  company?: CompanyCreateOneWithoutUsersInput | null
  skills?: SkillCreateManyWithoutUsersInput | null
}

export interface UserCreateWithoutManagerLikesInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  userLikes?: LikeCreateManyWithoutCandidateInput | null
  city: CityCreateOneWithoutUsersInput
  company?: CompanyCreateOneWithoutUsersInput | null
  skills?: SkillCreateManyWithoutUsersInput | null
  managedJobs?: JobCreateManyWithoutManagerInput | null
}

export interface UserCreateWithoutSkillsInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  userLikes?: LikeCreateManyWithoutCandidateInput | null
  managerLikes?: LikeCreateManyWithoutManagerInput | null
  city: CityCreateOneWithoutUsersInput
  company?: CompanyCreateOneWithoutUsersInput | null
  managedJobs?: JobCreateManyWithoutManagerInput | null
}

export interface UserCreateWithoutUserLikesInput {
  id?: UUID | null
  email: String
  password: String
  avatarUrl: String
  rating: Float
  deleted?: Boolean | null
  managerLikes?: LikeCreateManyWithoutManagerInput | null
  city: CityCreateOneWithoutUsersInput
  company?: CompanyCreateOneWithoutUsersInput | null
  skills?: SkillCreateManyWithoutUsersInput | null
  managedJobs?: JobCreateManyWithoutManagerInput | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
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
  avatarUrl?: String | null
  avatarUrl_not?: String | null
  avatarUrl_in?: String[] | String | null
  avatarUrl_not_in?: String[] | String | null
  avatarUrl_lt?: String | null
  avatarUrl_lte?: String | null
  avatarUrl_gt?: String | null
  avatarUrl_gte?: String | null
  avatarUrl_contains?: String | null
  avatarUrl_not_contains?: String | null
  avatarUrl_starts_with?: String | null
  avatarUrl_not_starts_with?: String | null
  avatarUrl_ends_with?: String | null
  avatarUrl_not_ends_with?: String | null
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
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  userLikes?: LikeUpdateManyWithoutCandidateInput | null
  managerLikes?: LikeUpdateManyWithoutManagerInput | null
  city?: CityUpdateOneRequiredWithoutUsersInput | null
  company?: CompanyUpdateOneWithoutUsersInput | null
  skills?: SkillUpdateManyWithoutUsersInput | null
  managedJobs?: JobUpdateManyWithoutManagerInput | null
}

export interface UserUpdateManyDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
}

export interface UserUpdateManyWithoutCityInput {
  create?: UserCreateWithoutCityInput[] | UserCreateWithoutCityInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutCityInput[] | UserUpdateWithWhereUniqueWithoutCityInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutCityInput[] | UserUpsertWithWhereUniqueWithoutCityInput | null
}

export interface UserUpdateManyWithoutCompanyInput {
  create?: UserCreateWithoutCompanyInput[] | UserCreateWithoutCompanyInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutCompanyInput[] | UserUpdateWithWhereUniqueWithoutCompanyInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput[] | UserUpsertWithWhereUniqueWithoutCompanyInput | null
}

export interface UserUpdateManyWithoutSkillsInput {
  create?: UserCreateWithoutSkillsInput[] | UserCreateWithoutSkillsInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueWithoutSkillsInput[] | UserUpdateWithWhereUniqueWithoutSkillsInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueWithoutSkillsInput[] | UserUpsertWithWhereUniqueWithoutSkillsInput | null
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredWithoutManagedJobsInput {
  create?: UserCreateWithoutManagedJobsInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutManagedJobsDataInput | null
  upsert?: UserUpsertWithoutManagedJobsInput | null
}

export interface UserUpdateOneWithoutManagerLikesInput {
  create?: UserCreateWithoutManagerLikesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutManagerLikesDataInput | null
  upsert?: UserUpsertWithoutManagerLikesInput | null
}

export interface UserUpdateOneWithoutUserLikesInput {
  create?: UserCreateWithoutUserLikesInput | null
  connect?: UserWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: UserUpdateWithoutUserLikesDataInput | null
  upsert?: UserUpsertWithoutUserLikesInput | null
}

export interface UserUpdateWithoutCityDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  userLikes?: LikeUpdateManyWithoutCandidateInput | null
  managerLikes?: LikeUpdateManyWithoutManagerInput | null
  company?: CompanyUpdateOneWithoutUsersInput | null
  skills?: SkillUpdateManyWithoutUsersInput | null
  managedJobs?: JobUpdateManyWithoutManagerInput | null
}

export interface UserUpdateWithoutCompanyDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  userLikes?: LikeUpdateManyWithoutCandidateInput | null
  managerLikes?: LikeUpdateManyWithoutManagerInput | null
  city?: CityUpdateOneRequiredWithoutUsersInput | null
  skills?: SkillUpdateManyWithoutUsersInput | null
  managedJobs?: JobUpdateManyWithoutManagerInput | null
}

export interface UserUpdateWithoutManagedJobsDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  userLikes?: LikeUpdateManyWithoutCandidateInput | null
  managerLikes?: LikeUpdateManyWithoutManagerInput | null
  city?: CityUpdateOneRequiredWithoutUsersInput | null
  company?: CompanyUpdateOneWithoutUsersInput | null
  skills?: SkillUpdateManyWithoutUsersInput | null
}

export interface UserUpdateWithoutManagerLikesDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  userLikes?: LikeUpdateManyWithoutCandidateInput | null
  city?: CityUpdateOneRequiredWithoutUsersInput | null
  company?: CompanyUpdateOneWithoutUsersInput | null
  skills?: SkillUpdateManyWithoutUsersInput | null
  managedJobs?: JobUpdateManyWithoutManagerInput | null
}

export interface UserUpdateWithoutSkillsDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  userLikes?: LikeUpdateManyWithoutCandidateInput | null
  managerLikes?: LikeUpdateManyWithoutManagerInput | null
  city?: CityUpdateOneRequiredWithoutUsersInput | null
  company?: CompanyUpdateOneWithoutUsersInput | null
  managedJobs?: JobUpdateManyWithoutManagerInput | null
}

export interface UserUpdateWithoutUserLikesDataInput {
  email?: String | null
  password?: String | null
  avatarUrl?: String | null
  rating?: Float | null
  deleted?: Boolean | null
  managerLikes?: LikeUpdateManyWithoutManagerInput | null
  city?: CityUpdateOneRequiredWithoutUsersInput | null
  company?: CompanyUpdateOneWithoutUsersInput | null
  skills?: SkillUpdateManyWithoutUsersInput | null
  managedJobs?: JobUpdateManyWithoutManagerInput | null
}

export interface UserUpdateWithWhereUniqueWithoutCityInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutCityDataInput
}

export interface UserUpdateWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutCompanyDataInput
}

export interface UserUpdateWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutSkillsDataInput
}

export interface UserUpsertWithoutManagedJobsInput {
  update: UserUpdateWithoutManagedJobsDataInput
  create: UserCreateWithoutManagedJobsInput
}

export interface UserUpsertWithoutManagerLikesInput {
  update: UserUpdateWithoutManagerLikesDataInput
  create: UserCreateWithoutManagerLikesInput
}

export interface UserUpsertWithoutUserLikesInput {
  update: UserUpdateWithoutUserLikesDataInput
  create: UserCreateWithoutUserLikesInput
}

export interface UserUpsertWithWhereUniqueWithoutCityInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutCityDataInput
  create: UserCreateWithoutCityInput
}

export interface UserUpsertWithWhereUniqueWithoutCompanyInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutCompanyDataInput
  create: UserCreateWithoutCompanyInput
}

export interface UserUpsertWithWhereUniqueWithoutSkillsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutSkillsDataInput
  create: UserCreateWithoutSkillsInput
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
  avatarUrl?: String | null
  avatarUrl_not?: String | null
  avatarUrl_in?: String[] | String | null
  avatarUrl_not_in?: String[] | String | null
  avatarUrl_lt?: String | null
  avatarUrl_lte?: String | null
  avatarUrl_gt?: String | null
  avatarUrl_gte?: String | null
  avatarUrl_contains?: String | null
  avatarUrl_not_contains?: String | null
  avatarUrl_starts_with?: String | null
  avatarUrl_not_starts_with?: String | null
  avatarUrl_ends_with?: String | null
  avatarUrl_not_ends_with?: String | null
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
  userLikes_every?: LikeWhereInput | null
  userLikes_some?: LikeWhereInput | null
  userLikes_none?: LikeWhereInput | null
  managerLikes_every?: LikeWhereInput | null
  managerLikes_some?: LikeWhereInput | null
  managerLikes_none?: LikeWhereInput | null
  city?: CityWhereInput | null
  company?: CompanyWhereInput | null
  skills_every?: SkillWhereInput | null
  skills_some?: SkillWhereInput | null
  skills_none?: SkillWhereInput | null
  managedJobs_every?: JobWhereInput | null
  managedJobs_some?: JobWhereInput | null
  managedJobs_none?: JobWhereInput | null
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

export interface AggregateCity {
  count: Int
}

export interface AggregateCompany {
  count: Int
}

export interface AggregateJob {
  count: Int
}

export interface AggregateJobStatus {
  count: Int
}

export interface AggregateLike {
  count: Int
}

export interface AggregateMatch {
  count: Int
}

export interface AggregateSkill {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface City {
  id: UUID
  name: String
  users?: Array<User> | null
  jobs?: Array<Job> | null
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

/*
 * A connection to a list of items.

 */
export interface CityConnection {
  pageInfo: PageInfo
  edges: Array<CityEdge | null>
  aggregate: AggregateCity
}

/*
 * An edge in a connection.

 */
export interface CityEdge {
  node: City
  cursor: String
}

export interface CityPreviousValues {
  id: UUID
  name: String
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface CitySubscriptionPayload {
  mutation: MutationType
  node?: City | null
  updatedFields?: Array<String> | null
  previousValues?: CityPreviousValues | null
}

export interface Company {
  id: UUID
  name: String
  legalName: String
  avatarUrl: String
  jobs?: Array<Job> | null
  users?: Array<User> | null
}

/*
 * A connection to a list of items.

 */
export interface CompanyConnection {
  pageInfo: PageInfo
  edges: Array<CompanyEdge | null>
  aggregate: AggregateCompany
}

/*
 * An edge in a connection.

 */
export interface CompanyEdge {
  node: Company
  cursor: String
}

export interface CompanyPreviousValues {
  id: UUID
  name: String
  legalName: String
  avatarUrl: String
}

export interface CompanySubscriptionPayload {
  mutation: MutationType
  node?: Company | null
  updatedFields?: Array<String> | null
  previousValues?: CompanyPreviousValues | null
}

export interface Job {
  id: UUID
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  manager: User
  city: City
  status: JobStatus
  company: Company
  skills?: Array<Skill> | null
  likes?: Array<Like> | null
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
  title: String
  description: String
  weekHours: Int
  weekDays: String
  remuneration: Float
  matchThreshold: Float
  tags: String
  createdAt: DateTime
  updatedAt: DateTime
  deleted: Boolean
}

export interface JobStatus {
  id: UUID
  name: String
  jobs?: Array<Job> | null
}

/*
 * A connection to a list of items.

 */
export interface JobStatusConnection {
  pageInfo: PageInfo
  edges: Array<JobStatusEdge | null>
  aggregate: AggregateJobStatus
}

/*
 * An edge in a connection.

 */
export interface JobStatusEdge {
  node: JobStatus
  cursor: String
}

export interface JobStatusPreviousValues {
  id: UUID
  name: String
}

export interface JobStatusSubscriptionPayload {
  mutation: MutationType
  node?: JobStatus | null
  updatedFields?: Array<String> | null
  previousValues?: JobStatusPreviousValues | null
}

export interface JobSubscriptionPayload {
  mutation: MutationType
  node?: Job | null
  updatedFields?: Array<String> | null
  previousValues?: JobPreviousValues | null
}

export interface Like {
  id: UUID
  candidate?: User | null
  manager?: User | null
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
  like: Like
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

export interface Skill {
  id: UUID
  name: String
  description?: String | null
  jobs?: Array<Job> | null
  users?: Array<User> | null
}

/*
 * A connection to a list of items.

 */
export interface SkillConnection {
  pageInfo: PageInfo
  edges: Array<SkillEdge | null>
  aggregate: AggregateSkill
}

/*
 * An edge in a connection.

 */
export interface SkillEdge {
  node: Skill
  cursor: String
}

export interface SkillPreviousValues {
  id: UUID
  name: String
  description?: String | null
}

export interface SkillSubscriptionPayload {
  mutation: MutationType
  node?: Skill | null
  updatedFields?: Array<String> | null
  previousValues?: SkillPreviousValues | null
}

export interface User {
  id: UUID
  email: String
  password: String
  avatarUrl: String
  rating: Float
  userLikes?: Array<Like> | null
  managerLikes?: Array<Like> | null
  city: City
  company?: Company | null
  skills?: Array<Skill> | null
  managedJobs?: Array<Job> | null
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
  avatarUrl: String
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