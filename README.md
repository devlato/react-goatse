# react-goatse

Easily add [Goatse](http://goatse.ru/) easter egg to your React app


[![Build Status](https://travis-ci.org/devlato/react-goatse.svg?branch=master)](https://travis-ci.org/devlato/react-goatse)
[![Coverage Status](https://coveralls.io/repos/github/devlato/react-goatse/badge.svg?branch=master)](https://coveralls.io/github/devlato/react-goatse?branch=master)
[![Code Climate](https://codeclimate.com/github/devlato/react-goatse/badges/gpa.svg)](https://codeclimate.com/github/devlato/react-goatse)
[![Issue Count](https://codeclimate.com/github/devlato/react-goatse/badges/issue_count.svg)](https://codeclimate.com/github/devlato/react-goatse)
[![npm version](https://badge.fury.io/js/react-goatse.svg)](https://badge.fury.io/js/react-goatse)


## Installation

With npm:

```sh
$ npm install --save-dev react-goatse
```

Or with Yarn:

```sh
$ yarn add react-goatse
```


## Usage

The usage is very simple, just pass a couple of optional props to Goatse component:

```jsx
const Goatse = require('react-goatse');

// ...

render() {
  return (
    <Goatse
        keys={/* Array of keys to type to trigger the easter egg */}
        simultaneous={/* Add this prop if keys should be pressed all together */}
        timeout={/* Duration to show goatse, displayed forever if prop not passed */} />
  );
}
```

You can add `react-goatse` anywhere in your component hierarchy, because it adds a global
keyboard events listener and doesn't stops any event bubbling.

For example:

```jsx
const Goatse = require('react-goatse');


export default class YourComponent extends React.Component {
  render() {
    // When user types 'goatse' somewhere using your React app,
    // show Goatse easter egg.
    const shortcutKeys = ['g', 'o', 'a', 't', 's', 'e'];

    return (
      <Goatse
          keys={shortcutKeys}
          timeout={10000} />
    );
  }
}
```


## Props

* `keys` – Just array of string representing each button to be pressed;
* `simultaneous` – Set this prop if user should press buttons all together;
* `timeout` – Amount of time in milliseconds while goatse should be displayed.


## Supported keys

All alphabetic letters and numbers could be passed as is, i.e. letter "a" is just "a".

If you use `simultaneous` mode and you have the `Shift` button in your hotkey combination,
please set the unmodified buttons.

For example, to have a `Shift+!` hotkey, you should pass `keys={["shift", "1"]}`,
because "Shift" and "1" pressed together produce "!".


## Dependencies

Project uses [react-easter](https://www.npmjs.com/package/react-easter) to easily add an easter egg.


## Test coverage

Library has ~100% test coverage:

```sh
$ npm run test:coverage

> react-goatse@1.0.0 test:coverage ~/projects/react-goatse
> NODE_ENV=test jest --coverage --no-cache --config .jestrc

 PASS  test/Component.js
  <Goatse />
    ✓ Should render (9ms)
    ✓ Should render goatse with timeout (214ms)
    ✓ Should render goatse without timeout (206ms)
    ✓ Should render goatse with timeout simultaneously (206ms)
    ✓ Should render goatse without timeout simultaneously (203ms)

--------------|----------|----------|----------|----------|----------------|
File          |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
--------------|----------|----------|----------|----------|----------------|
All files     |      100 |       50 |      100 |      100 |                |
 Component.js |      100 |       50 |      100 |      100 |                |
--------------|----------|----------|----------|----------|----------------|
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.321s
Ran all test suites.
```


## Code style

Library is 100% compatible with [airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base) for ES5.


## Available commands

Library has the following commands available:

* Run the tests:

  ```
  $ npm test
  ```

* Run the tests and display test coverage:

  ```
  $ npm run test:coverage
  ```

* Run the linter:

  ```
  $ npm run lint
  ```

## Build

No building required, library is implemented with ES5 React syntax for better compatibility and shipped as is.


## License

Library is shipped "as is" under MIT License.


## Contributing

Feel free to contribute but don't forget to test everything properly.


[![NPM](https://nodei.co/npm/react-goatse.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-goatse/)
