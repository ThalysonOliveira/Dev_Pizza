import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';

const authenticationResolver = loadFilesSync(
  join(__dirname, './*.resolver.{t,j}s')
);

export default authenticationResolver;
