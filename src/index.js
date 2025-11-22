const dotenv = require('dotenv');
const path = require('path');//creating safe file paths across all operating systems.
const envFound = dotenv.config({ path: path.resolve(process.cwd(), '.env') });
