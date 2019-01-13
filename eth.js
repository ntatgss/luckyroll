{
  "_from": "ethjs",
  "_id": "ethjs@0.3.6",
  "_inBundle": false,
  "_integrity": "sha512-9ojnSkV5XXSM5vo0pKgZpE+SNBPxqSUN0dZmMP5dBZVFOYctRd9tfaZ80Jnde3M4JrfUhhkbG5QFvewitaAY7Q==",
  "_location": "/ethjs",
  "_phantomChildren": {
    "bn.js": "4.11.6",
    "ethjs-format": "0.2.5",
    "js-sha3": "0.5.5",
    "number-to-bn": "1.7.0"
  },
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "ethjs",
    "name": "ethjs",
    "escapedName": "ethjs",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/ethjs/-/ethjs-0.3.6.tgz",
  "_shasum": "c0d2b364e32c59d40fc7cd73f8103f370e99ad70",
  "_spec": "ethjs",
  "_where": "/home/nick",
  "author": {
    "name": "Nick Dodson",
    "email": "nick.dodson@consensys.net"
  },
  "babel": {
    "plugins": [
      [
        "transform-es2015-template-literals",
        {
          "loose": true
        }
      ],
      "transform-es2015-literals",
      "transform-es2015-function-name",
      "transform-es2015-arrow-functions",
      "transform-es2015-block-scoped-functions",
      [
        "transform-es2015-classes",
        {
          "loose": true
        }
      ],
      "transform-es2015-object-super",
      "transform-es2015-shorthand-properties",
      [
        "transform-es2015-computed-properties",
        {
          "loose": true
        }
      ],
      [
        "transform-es2015-for-of",
        {
          "loose": true
        }
      ],
      "transform-es2015-sticky-regex",
      "transform-es2015-unicode-regex",
      "check-es2015-constants",
      [
        "transform-es2015-spread",
        {
          "loose": true
        }
      ],
      "transform-es2015-parameters",
      [
        "transform-es2015-destructuring",
        {
          "loose": true
        }
      ],
      "transform-es2015-block-scoping",
      "transform-object-rest-spread",
      "transform-es3-member-expression-literals",
      "transform-es3-property-literals"
    ],
    "env": {
      "commonjs": {
        "plugins": [
          [
            "transform-es2015-modules-commonjs",
            {
              "loose": true
            }
          ]
        ]
      }
    }
  },
  "bugs": {
    "url": "https://github.com/ethjs/ethjs-filter/issues"
  },
  "bundleDependencies": false,
  "dependencies": {
    "bn.js": "4.11.6",
    "ethjs-abi": "0.2.1",
    "ethjs-contract": "0.2.1",
    "ethjs-filter": "0.1.5",
    "ethjs-provider-http": "0.1.6",
    "ethjs-query": "0.3.7",
    "ethjs-unit": "0.1.6",
    "ethjs-util": "0.1.3",
    "js-sha3": "0.5.5",
    "number-to-bn": "1.7.0"
  },
  "deprecated": false,
  "description": "A light-weight, highly optimised JS utility for Ethereum",
  "devDependencies": {
    "babel-cli": "6.18.0",
    "babel-core": "6.18.2",
    "babel-eslint": "7.1.0",
    "babel-loader": "6.2.8",
    "babel-plugin-check-es2015-constants": "6.8.0",
    "babel-plugin-transform-es2015-arrow-functions": "6.8.0",
    "babel-plugin-transform-es2015-block-scoped-functions": "6.8.0",
    "babel-plugin-transform-es2015-block-scoping": "6.18.0",
    "babel-plugin-transform-es2015-classes": "6.18.0",
    "babel-plugin-transform-es2015-computed-properties": "6.8.0",
    "babel-plugin-transform-es2015-destructuring": "6.19.0",
    "babel-plugin-transform-es2015-for-of": "6.18.0",
    "babel-plugin-transform-es2015-function-name": "6.9.0",
    "babel-plugin-transform-es2015-literals": "6.8.0",
    "babel-plugin-transform-es2015-modules-commonjs": "6.18.0",
    "babel-plugin-transform-es2015-object-super": "6.8.0",
    "babel-plugin-transform-es2015-parameters": "6.18.0",
    "babel-plugin-transform-es2015-shorthand-properties": "6.18.0",
    "babel-plugin-transform-es2015-spread": "6.8.0",
    "babel-plugin-transform-es2015-sticky-regex": "6.8.0",
    "babel-plugin-transform-es2015-template-literals": "6.8.0",
    "babel-plugin-transform-es2015-unicode-regex": "6.11.0",
    "babel-plugin-transform-es3-member-expression-literals": "6.5.0",
    "babel-plugin-transform-es3-property-literals": "6.5.0",
    "babel-plugin-transform-object-rest-spread": "6.19.0",
    "babel-register": "6.18.0",
    "chai": "3.5.0",
    "check-es3-syntax-cli": "0.1.3",
    "coveralls": "2.11.9",
    "cross-env": "1.0.7",
    "eslint": "2.10.1",
    "eslint-config-airbnb": "9.0.1",
    "eslint-import-resolver-webpack": "0.2.4",
    "eslint-plugin-import": "1.8.0",
    "eslint-plugin-jsx-a11y": "1.2.0",
    "eslint-plugin-react": "5.1.1",
    "ethereumjs-testrpc": "3.0.2",
    "ethjs-account": "0.1.0",
    "ethjs-signer": "0.1.0",
    "eventsource-polyfill": "0.9.6",
    "istanbul": "0.4.5",
    "json-loader": "0.5.4",
    "lint-staged": "1.0.1",
    "mocha": "3.1.2",
    "pre-commit": "1.1.3",
    "rimraf": "2.3.4",
    "web3": "0.17.0-beta",
    "webpack": "2.1.0-beta.15"
  },
  "engines": {
    "node": ">=6.5.0",
    "npm": ">=3"
  },
  "eslintConfig": {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
      "node": true,
      "mocha": true,
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
    },
    "rules": {
      "import/no-unresolved": 2,
      "comma-dangle": [
        2,
        "always-multiline"
      ],
      "indent": [
        2,
        2,
        {
          "SwitchCase": 1
        }
      ],
      "no-console": 1,
      "max-len": 0,
      "prefer-template": 2,
      "no-use-before-define": 0,
      "newline-per-chained-call": 0,
      "arrow-body-style": [
        2,
        "as-needed"
      ]
    }
  },
  "files": [
    "dist",
    "internals",
    "lib",
    "src"
  ],
  "homepage": "https://github.com/ethjs/ethjs-filter#readme",
  "keywords": [
    "ethereum",
    "events",
    "rpc"
  ],
  "license": "MIT",
  "lint-staged": {
    "lint:eslint": "*.js"
  },
  "main": "lib/index.js",
  "name": "ethjs",
  "pre-commit": "build",
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/ethjs/ethjs.git"
  },
  "scripts": {
    "build": "npm run build:commonjs && npm run test:lib && npm run build:umd && npm run build:umd:min",
    "build:clean": "npm run test:clean && rimraf ./dist",
    "build:commonjs": "cross-env BABEL_ENV=commonjs babel src --out-dir lib --copy-files",
    "build:stats": "cross-env BABEL_ENV=commonjs NODE_ENV=production webpack --config ./internals/webpack/webpack.config.js --progress --profile --json > dist/stats.json",
    "build:umd": "cross-env BABEL_ENV=commonjs NODE_ENV=development webpack --config ./internals/webpack/webpack.config.js --progress",
    "build:umd:min": "cross-env BABEL_ENV=commonjs NODE_ENV=production webpack --config ./internals/webpack/webpack.config.js --progress",
    "coveralls": "npm run test-travis && cat ./coverage/lcov.info | coveralls",
    "lint": "npm run lint:js",
    "lint:eslint": "eslint --ignore-path .gitignore --ignore-pattern **/**.min.js",
    "lint:js": "npm run lint:eslint -- . ",
    "lint:staged": "lint-staged",
    "prebuild": "npm run build:clean && npm run test",
    "prepublish": "npm run build",
    "pretest": "npm run lint",
    "release": "npmpub",
    "start": "npm test",
    "test": "mocha ./src/tests/**/*.js -R spec --timeout 2000000",
    "test-travis": "node ./node_modules/istanbul/lib/cli.js cover ./node_modules/mocha/bin/_mocha -- src/tests/**/*.js -R spec --timeout 2000000",
    "test:clean": "rimraf ./coverage",
    "test:lib": "mocha ./lib/tests/**/*.js -R spec --timeout 2000000"
  },
  "version": "0.3.8"
}
