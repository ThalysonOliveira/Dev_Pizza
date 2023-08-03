import { gql } from "@apollo/client";

export const DETAIL_USER = gql`
 query DetailUser {
  detailUser {
    id
    name
    email
  }
}
`