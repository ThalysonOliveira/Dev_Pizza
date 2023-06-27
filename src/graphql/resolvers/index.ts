import authenticationResolver from './authentication';
import usersResolver from './users';
import categoriesResolver from './categories';
import productsResolver from './products';

export default [
  ...usersResolver,
  authenticationResolver,
  categoriesResolver,
  productsResolver,
];
