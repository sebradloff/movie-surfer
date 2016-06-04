# Movie Surfer
## Purpose of this project:
To show how to create a React standardized project
  - Initial package.json setup and scripts.
  - Webpack and .babelrc configurations.
  - How to think about React components.


## JavaScript, ES6 and JSX Linting
Using Airbnb lint configuration follow the instructions [here](https://www.npmjs.com/package/eslint-config-airbnb) to download the correct packages.

Read more [here](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) to learn about .eslintrc config files.

If you use Atom, download the following packages in order to get real-time linting of JavaScript, ES6 and JSX code in the editor. In the root folder, run the following commands to get the package:
```
apm install linter
```
Once that finishes successfully, download the following package:
```
apm install linter-eslint
```
You can also run the linting task through the command line. However, it is best to get real-time feedback as you're developing. To run the linting task from the command line, run the following command:
```
npm run lint:browser
```
You should run the lint command whenever you make changes to the .eslintrc file and then restart atom for the changes to take effect.
