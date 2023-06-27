import authenticationTypeDefs from './authentication';
import usersTypeDefs from './users';
import categoriesTypeDefs from './categories';

export default [...usersTypeDefs, authenticationTypeDefs, categoriesTypeDefs];
