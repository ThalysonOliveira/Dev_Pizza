import { makeUploadImage } from '@factories/upload';
import { InputType } from '@type/generics';
import { Context } from '@type/middlewares';
import { userIdContextValidate } from '@utils/context-validate';

export default {
  Mutation: {
    uploadImage: (
      _: never,
      { input }: InputType<File>,
      { userId }: Context
    ) => {
      userIdContextValidate(userId);
      return makeUploadImage().handle(input);
    },
  },
};
