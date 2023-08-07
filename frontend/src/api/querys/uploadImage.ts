import { gql } from "@apollo/client";

export const UPLOAD_IMAGE = gql`
 mutation UploadImage($input: File!) {
  uploadImage(input: $input)
}
`