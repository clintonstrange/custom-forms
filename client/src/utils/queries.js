import gql from "graphql-tag";

export const QUERY_USER = gql`
  {
    user {
      username
      email
      }
    }
  }
`;
