# Movie Surfer
## Purpose of this project:
To show how to create a React standardized project
  - Initial `package.json` setup and scripts.
  - Webpack and `.babelrc` configurations.
  - How to think about React components.

## Initial Setup
### package.json and express
  1. Once you've created and entered your project root folder, run `$ npm init` and follow the instructions to create a `package.json` file.
  2. Install express `$ npm install express --save` which adds express to your `package.json` as a dependency and creates a `node_modules` directory. Add `node_modules` to your `.gitignore`. Read more [here](https://docs.npmjs.com/) to understand npm and how to setup your `package.json`.
  3. As you add more packages, make sure to run `$ npm install` if you are not adding them through the npm cli.

### webpack and React
  1. [Here](http://survivejs.com/webpack/advanced-techniques/configuring-react/) is a decent writeup on how to configure webpack for React. webpack is an intricate module bundler and there is a [great course on Pluralsight](https://app.pluralsight.com/library/courses/webpack-fundamentals/table-of-contents) that I recommend for the basics.
  2. `$ npm install webpack babel-core babel-loader babel-preset-es2015 babel-preset-react --save`
  3. Create both a `webpack.config.js` and a `webpack.prod.config.js`, for local and prod configurations respectively.
  4. Create a `.babelrc` file with the same config. Learn more about babel [here](https://babeljs.io/blog/2015/10/31/setting-up-babel-6)
  5. Comments in each of the webpack file should help explain the configuration.

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
