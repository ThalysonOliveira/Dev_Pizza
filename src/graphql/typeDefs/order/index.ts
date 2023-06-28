import { loadFilesSync } from '@graphql-tools/load-files';
import { join } from 'path';

const orderTypeDefs = loadFilesSync(join(__dirname, './*graphql'));

export default orderTypeDefs;
