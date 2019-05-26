import {gql} from "apollo-boost";

export const GET_TODOS = gql`
    query{
      todos{
        id,title,completed
      }
    }
`;