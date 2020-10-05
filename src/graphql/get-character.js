import gql from "graphql-tag";
export const GET_CHARACTERS = gql`
  query characters($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        type
        origin {
          name
          dimension
        }
        location {
          name
          dimension
        }
        image
        status
        species
      }
    }
  }
`;
