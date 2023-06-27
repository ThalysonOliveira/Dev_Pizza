import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const categoriesTypeDefs = loadFilesSync(join(__dirname, './*graphql'));

export default categoriesTypeDefs;
