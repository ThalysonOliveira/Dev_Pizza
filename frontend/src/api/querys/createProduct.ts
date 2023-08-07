import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
 mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input)
}
`
