import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const categoriesResolver = loadFilesSync(join(__dirname, './*resolver.{t,j}s'));

export default categoriesResolver;
