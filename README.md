## Simple Currency App

## Demo
![Alt text](/src/images/o5iai1sbqY.gif)

## Tech Stack
```
1. Node.js Environment
2. React.js
3. Flow (Typing)
4. Testing (Enzyme, Chai)
```

## Folder Structure

```
shopee-test/
  ...
    ...
  src/
    api/
    utils/
    base-ui/
      components/
      styles/
    pages/
      Shopee.js
    ...
    .eslintrc
    index.js
```

### Folder Structure Description

- `api`  data fetching collection folder
- `utils` middleware

### Run Eslint Config Airbnb

Using Javascript Airbnb for standard style & eslint

1. Open terminal
2. run package eslint config airbnb

```

(
  export PKG=eslint-config-airbnb;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn add "$PKG@latest" --dev
)

```

3. installing eslint

```
yarn add --dev eslint-config-airbnb eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#

```

### Config Flow

```

yarn add --dev babel-eslint eslint-plugin-flowtype
yarn add --dev flow-bin@0.67.1

```

### Config file .eslintrc

1. make your `.eslintrc` in your root project folder
2. insert this below code to `.eslintrc` file

```

    {
      "parser": "babel-eslint",
      "plugins": [
        "flowtype"
      ],
      "extends": [
        "airbnb",
        "plugin:flowtype/recommended"
      ],
      "rules": {
        "react/jsx-filename-extension": 0,
        "react/prefer-stateless-function": 0,
        "react/sort-comp": 0
      },
      "settings": {
        "import/resolver": {
          "node": {
            "extensions": [".js", ".android.js", ".ios.js"]
          }
        }
      },
      "env": {
        "browser": true,
      }
    }


```

### Run Locally

```
- git clone https://github.com/mrhandoko/shopee-test.git
- yarn
- yarn start
```

### Run Testing

```
- yarn test
```

### Run Docker

```
- docker build . -t shopee-test
- docker container run -it -p 3000:3000 shopee-test:latest
```

will run in port 3000

### Show Running Docker Container
```
 - docker ps
```
