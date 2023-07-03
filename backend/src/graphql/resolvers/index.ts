import authenticationResolver from './authentication';
import usersResolver from './users';
import categoriesResolver from './categories';
import productsResolver from './products';
import orderResolver from './order';

export default [
  ...usersResolver,
  authenticationResolver,
  categoriesResolver,
  productsResolver,
  orderResolver,
];
