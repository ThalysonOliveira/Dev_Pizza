import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const productsTypeDefs = loadFilesSync(join(__dirname, './*graphql'));

export default productsTypeDefs;
