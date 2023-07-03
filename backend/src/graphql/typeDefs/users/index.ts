import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const usersTypeDefs = loadFilesSync(join(__dirname, './*graphql'));

export default usersTypeDefs;
