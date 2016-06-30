# Example React Es6

This is an example application to be used as reference for building an application with React and Es6.

The app interfaces with the GIPHY api to provide a GIF search user interface.

## Developing

It is developed using with React and Es6 with JSX.

You need to have nodejs installed. Tested with Node v4.2.4
```
brew install node
```

There are a few standard tools needed to build the component.

- Browserify is used to compile the js into build.js.
- Watchify is the same as browserify, but it runs as a process and re-builds on every file change.
- Uglify is a standard build tool to minify JavaScript

```
npm install -g bower browserify watchify uglify-js
```

Install project dependancies

```
npm install
```


Build the code once:
```
npm run build
```

Watch files and build code continuously. Note you still need to run `build` to minifiy the code.
```
npm run watch
```

These commands are defined in package.json.

Developing with the example/index.html
```
python -m SimpleHTTPServer
# now open localhost:8000/example/index.html
```

## Notes for code release

### Build the code and minified code
- npm run build


## Notes

"shims" are used because we have globals already on the page. Eg react and jquery are assumed to be loaded on the page, and they aren't included in the build.js.


## Authors

- Richard@archive.org  


## References

- browserify
  - Browserify discovers all modules and bundles them up into a single file
  - http://browserify.org

- babelify
  - Converts es6 and jsx to normal JavaScript
  - https://github.com/babel/babelify

- [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/blob/master/es6%20&%20beyond/README.md#you-dont-know-js-es6--beyond)
