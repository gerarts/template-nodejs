# template-nodejs
Personal template for Node.js projects

### Environment
- `express` as the environment
    - `body-parser` for `POST` requests
    - `cookie-parser` for cookies
    - `mysql` for database connections
    - `ejs` for page creation
- `eslint` for code style with configuration set
- `istanbul` for coverage reporting
- `mocha` as a testing framework
- `jsdoc` for documentation generation
- `travis-ci` configuration set
- `.gitignore` configuration set

### Built in `npm` scripts
- `start` starts the server
- `test` runs the tests
- `coverage` generates a coverage report
- `jsdoc` generates the jsdoc
- `clean` removes the coverage report and jsdoc if they exist
- `refresh` deletes `node_modules` and re-installs all the dependencies
