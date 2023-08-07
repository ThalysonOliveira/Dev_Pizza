import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const uploadTypeDefs = loadFilesSync(join(__dirname, './*graphql'));

export default uploadTypeDefs;
