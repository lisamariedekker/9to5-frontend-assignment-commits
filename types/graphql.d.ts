
declare module '*/PostsQuery.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const posts: DocumentNode;

  export default defaultDocument;
}
    