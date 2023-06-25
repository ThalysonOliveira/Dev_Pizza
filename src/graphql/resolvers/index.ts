import authenticationResolver from './authentication';
import usersResolver from './users';

export default [...usersResolver, authenticationResolver];
