import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

const uploadResolver = loadFilesSync(join(__dirname, './*resolver.{t,j}s'));

export default uploadResolver;
