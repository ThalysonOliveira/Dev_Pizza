import { gql } from "@apollo/client";

export const FINISH_ORDER = gql`
 mutation FinishOrder($input: FinishOrderInput!) {
  finishOrder(input: $input)
}
`