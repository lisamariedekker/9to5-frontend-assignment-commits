
declare module '*/PostQuery.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const post: DocumentNode;

  export default defaultDocument;
}
    

declare module '*/PostsQuery.gql' {
  import { DocumentNode } from 'graphql';
  const defaultDocument: DocumentNode;
  export const posts: DocumentNode;

  export default defaultDocument;
}
    