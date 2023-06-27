import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

const productsResolver = loadFilesSync(join(__dirname, './*resolver.{t,j}s'));

export default productsResolver;
