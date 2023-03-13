# Tailwindcss HTML Playground

This repo was created to be able to generate tailwindcss and html output for your project that requires you to have classnames without colons. This might be the case if your pasting the styles and html into a page builder that does not allow colons like [Avada](https://theme-fusion.com/).

## Install packages using yarn

```
yarn
```

## Develop

To run your dev environment, install the [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

Run the live server, and then run

```
yarn dev
```

## Generate Production Code

To generate HTML and minified CSS, run

```
yarn build
```

Your finished files will appear in the /dist directory.
