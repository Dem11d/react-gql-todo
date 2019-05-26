import {gql} from "apollo-boost";

export const GET_TODOS = gql`
    query{
      todos{
        id,title,completed
      }
    }
`;

export const ADD_TODO = gql`
    mutation Add($title: String!){
      add(title:$title){
        id, title
      }
    }
`;

export const DELETE_TODO = gql`
   mutation Destroy($id: String!){
      destroy(id:$id){
        id
      }
    }
`;

export const TOGGLE_TODO = gql`
    mutation Toggle($id: String!){
      toggle(id:$id){
        id, completed
      }
    }
`;