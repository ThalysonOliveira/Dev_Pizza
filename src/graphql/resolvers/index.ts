import authenticationResolver from './authentication';
import usersResolver from './users';
import categoriesResolver from './categories';

export default [...usersResolver, authenticationResolver, categoriesResolver];
