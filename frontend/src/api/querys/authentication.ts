import { gql } from "@apollo/client";

export const AUTHENTICATION = gql`
 mutation Authentication($input: AuthenticationInput!) {
  authentication(input: $input)
}
`;