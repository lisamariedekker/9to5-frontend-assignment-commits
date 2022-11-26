export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type ListPostsInput = {
  url: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Author>;
  content?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['String']>;
  featuredMedia?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
};

export type PostInput = {
  id: Scalars['ID'];
  url: Scalars['String'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type RootQueryTypePostArgs = {
  post: PostInput;
};


export type RootQueryTypePostsArgs = {
  posts: ListPostsInput;
};

export type PostsQueryVariables = Exact<{
  posts: ListPostsInput;
}>;


export type PostsQuery = (
  { __typename?: 'RootQueryType' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename?: 'Post' }
    & Pick<Post, 'date' | 'content' | 'featuredMedia' | 'id' | 'title'>
  )>>> }
);
