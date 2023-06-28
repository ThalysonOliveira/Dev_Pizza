import authenticationTypeDefs from './authentication';
import usersTypeDefs from './users';
import categoriesTypeDefs from './categories';
import productsTypeDefs from './products';
import orderTypeDefs from './order';

export default [
  ...usersTypeDefs,
  authenticationTypeDefs,
  categoriesTypeDefs,
  productsTypeDefs,
  orderTypeDefs,
];
