# Movie Surfer
## Purpose of this project:
To show how to create a React standardized project
  - Initial `package.json` setup and scripts.
  - Webpack and `.babelrc` configurations.
  - How to think about React components.

## To Run this Project
  - `$ npm install` to install all dependencies
  - `$ npm run build:semantic` to install the semantic bundle
  - `$ npm run dev` to run webpack and the node server

## ToDo
  - setup proper webpack-dev-server config
  - ReactRouter should be a dependecy NOT devDep

## Initial Setup
### package.json and express install
  1. Once you've created and entered your project root folder, run `$ npm init` and follow the instructions to create a `package.json` file.
  2. Install express `$ npm install express --save` which adds express to your `package.json` as a dependency and creates a `node_modules` directory. Add `node_modules` to your `.gitignore`. Read more [here](https://docs.npmjs.com/) to understand npm and how to setup your `package.json`.
  3. As you add more packages, make sure to run `$ npm install` if you are not adding them through the npm cli.

### webpack and React
  1. [Here](http://survivejs.com/webpack/advanced-techniques/configuring-react/) is a decent writeup on how to configure webpack for React. webpack is an intricate module bundler and there is a [great course on Pluralsight](https://app.pluralsight.com/library/courses/webpack-fundamentals/table-of-contents) that I recommend for the basics.
  2. `$ npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save`
  3. `$ npm install webpack -D` save webpack as devDependency instead of a global install so you don't run into any weird version issues.
  4. Create both a `webpack.config.js` and a `webpack.prod.config.js`, for local and prod configurations respectively.
  5. Create a `.babelrc` file with the same config. Learn more about babel [here](https://babeljs.io/blog/2015/10/31/setting-up-babel-6)
  6. Comments in each of the webpack file should help explain the configuration.

### server.js
  1. Create a `server.js` file at the root of your project.
  2. You are serving the `index.html` file on each route, because it will hold the entry point of you application. It contains a basic HTML markup along with a div with the id *App*, and a script tag for your `bundle.js` file.
  3. Given you have webpack bundling all your sources into a dist folder, you should statically serve that folder.
  4. I highly recommend the [Code School course](http://campus.codeschool.com/courses/building-blocks-of-express-js/contents) if you've never used Express before.

### React Router
  1. [Fantastic tutorial on React router](https://github.com/reactjs/react-router-tutorial), it explains the intricacies of routing with React far better than I can.
  2. `$ npm install -D react-router`
  3. Create an `index.js` file in the src folder. This file will contain all the routes for you application.
  4. Comments in the `index.js` file should help explain the routing configuration.

### semantic-ui and jQuery
  > [**semantic-ui**](http://semantic-ui.com/) is a great development framework to create responsive websites that are cross browser compatible.

  1. `$ npm install --save semantic-ui`
  2. You want to create a script in the `package.json` file which will run the gulp command to create all the semantic components. I've called it **build:semantic**.
  3. Serve up the `semantic` folder in the `server.js` file, then include the minified semantic css and js in the `index.html` as I've done.
  4. `$ npm install --save jquery`
  5. jQuery is necessary for semantic and the easiest way I've found to add it is to serve it statically in the `index.js` file and then include it in the `index.html`.
  6. In the webpack config use the ProvidePlugin to add jquery, which makes it available to all react components.
  7. Until [Startdust](https://github.com/TechnologyAdvice/stardust) is completed, you need to include jQuery when using semantic.

### mocha and enzyme (testing)
  > using [mocha](https://mochajs.org/) as a testing framework. A [`mocha.opts`](https://mochajs.org/#mochaopts) file under the test folder contains command line arguments as options for mocha tests.

  > [enzyme](https://github.com/airbnb/enzyme/blob/master/docs/api/README.md) is test utility for React. It's very expressive and allows for both shallow and full rendering.

  1. `$ npm install -D jsdom` is a [necessary dependency](https://github.com/tmpvar/jsdom) for testing within a DOM.
  2. `$ npm install -D mocha sinon expect react-addons-test-utils enzyme` Create the test folder with the `mocha.opts` file. You can choose whatever [reporter](https://mochajs.org/#reporters) you want. I like nyan because it's easy to see when there are warnings.
  3. Create a `dom.js` file which is required in the `mocha.opts` file which means that it will be available for all tests.
  > this line says to include this file across all tests.
  ```
  --require test/utils/dom.js
  ```
  > this line runs the jsx compiler across all test files
  ```
  --compilers jsx?:babel-core/register
  ```
  > this includes all sub directories for the test
  ```
  --recursive
  ```
  > this chooses the reporter
  ```
  --reporter nyan
  ```

  4. Setup a test npm script in the `package.json` file. Currently run tests with `$ npm run test`.
  5. I recommend to mirror your test folder structure with your src folder structure, so it's easy to go back and forth between your test and source code.

## JavaScript, ES6 and JSX Linting
Using Airbnb lint configuration follow the instructions [here](https://www.npmjs.com/package/eslint-config-airbnb) to download the correct packages.

Read more [here](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) to learn about .eslintrc config files.

If you use Atom, download the following packages in order to get real-time linting of JavaScript, ES6 and JSX code in the editor. In the root folder, run the following commands to get the package:
```
$ apm install linter
```
Once that finishes successfully, download the following package:
```
$ apm install linter-eslint
```
You can also run the linting task through the command line. However, it is best to get real-time feedback as you're developing. The `lint:broswer` script is in the `package.json` file. To run the linting task from the command line, run the following command:
```
$ npm run lint:browser
```
You should run the lint command whenever you make changes to the .eslintrc file and then restart atom for the changes to take effect.
