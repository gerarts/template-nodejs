# template-nodejs
Personal template for Node.js projects

### Usage
After following the steps below a local repository explorer should show two remotes:
- `origin`
	- this is the repository where you create your project
- `upstream`
	- this is the repository where you can get template updates

Make sure always to push your changes to the `origin` remote since you
will not be able to change the contents of the `upstream` remote.

#### 1. Create a new repository
Create a new `git` repository (e.g. on GitHub). Make sure not to select
"Initialize this repository with a README".

#### 2. Clone the new repository
Clone the repository to your local machine

`git clone https://github.com/USER/NEW-REPOSITORY.git`

#### 3. Add this upstream remote
Add this template as an upstream remote to keep it up to date if we
change or update things.

`git remote add upstream https://github.com/gerarts/template-nodejs.git`

#### 4. Pull from this template
Pull the contents of this template on your local machine.

`git pull upstream master`

Your local copy should be exactly the same as the template.

#### 5. Push to your new repository
Push the template to your new repository and start working from there.

`git push origin master`

#### (Optional) 6. Enable your new repository in Travis-CI
Enable your new repository on Travis-CI and enable branch protection for
the `master` branch to ensure tests pass for the code in the master
branch.

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
