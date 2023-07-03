import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const authenticationTypeDefs = loadFilesSync(join(__dirname, './*graphql'));

export default authenticationTypeDefs;
