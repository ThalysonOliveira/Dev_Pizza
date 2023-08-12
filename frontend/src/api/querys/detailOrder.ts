import { gql } from "@apollo/client";

export const DETAIL_ORDER = gql`
 query DetailOrder($input: DetailOrderInput!) {
  detailOrder(input: $input) {
    id
    order_id
    product_id
    amount
    product {
      id
      name
      price
      description
      banner
      categoryId
    }
    order {
      id
      table
      name
      draft
      status
    }
  }
}
`