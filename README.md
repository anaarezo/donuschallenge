# Delivery Product

![your-delivery](https://user-images.githubusercontent.com/13490305/87845381-14a50080-c89d-11ea-898c-c88fea78f943.png)

## Summary
- [Architecture](#architecture)
- [Built With](#built-with)
- [Installation](#installation)
- [Author](#author)

 ## Architecture
 
    .
    ├── ...
    ├── src                    
    │   ├── assets          # Images
    │   ├── components      # Basic components for building the project (touchable, inputs, blocks, etc.)
    │   ├── constants       # Consts to use throughout the project (font sizes, colors, etc.)
    │   ├── navigation      # Configure routes, bottom tabbar to redirect to each screen
    │   ├── screens         # Project screens
    │   └── App.js          # App Loader
    └── ...

## Built With

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Apollo Client(React)](https://www.apollographql.com/docs/react/)
- [React Native Testing Library](https://www.native-testing-library.com/)


## Installation


### Step 1
👯 Clone this repo to your local machine using:
 `https://github.com/anaarezo/donuschallenge.git`


### Step 2
Open the terminal and access the project folder `./donuschallenge`.

### Step 3
Run `yarn` or `npm` to install the required packages (I recommend `yarn`)

For Yarn users: 
```shell
$ yarn
```
For NPM users:

```shell
$ npm install
```

### Step 4

Run `expo` and scan the QRCode at the screen

Yarn user:
```shell
$ yarn start
```
Npm user:
```shell
$ npm start
```
if none works try:
```shell
$ yarn expo start
```

## Comments:

* I didn't have time to write tests for all possible components, I wrote just a few to exemplify.

## Author

Ana Arezo 
- [LinkedIn](https://www.linkedin.com/in/anaarezo/)
- [E-mail](mailto:laura.arezo@gmail.com)
