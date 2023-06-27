import authenticationTypeDefs from './authentication';
import usersTypeDefs from './users';
import categoriesTypeDefs from './categories';
import productsTypeDefs from './products';

export default [
  ...usersTypeDefs,
  authenticationTypeDefs,
  categoriesTypeDefs,
  productsTypeDefs,
];
