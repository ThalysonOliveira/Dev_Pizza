import { gql } from "@apollo/client";

export const LIST_ORDERS = gql`
 query ListOrders {
  listOrders {
    id
    table
    name
    draft
    status
  }
}
`