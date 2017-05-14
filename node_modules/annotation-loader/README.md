#annotation-loader

webpack annotation loader

## Installation

``` sh
npm install --save-dev annotation-loader
```

## Usage

for test.js 

``` javascript

var foo = {};

/*@bar*/
console.log('bar');
/*@/bar*/

var bar = {};

/*@bar2*/
console.log('bar2');
/*@/bar2*/

```

with config 

``` javascript

var webpack = require('webpack');

module.exports = {
    entry:  './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /^.*$/,
                loader: "annotation",
                annotations: [
                    {
                        'for': 'bar',
                        'do': ''
                    },
                    {
                        'for': 'bar2',
                        'do': function (str, $1) {
                            //$1 is content of annotation 
                            return '//annotation removed';
                        }
                    }
                ]
            }
        ]
    }
};
```

you get

``` javascript

var foo = {};

var bar = {};

//annotation removed

```


## Use for

Use to remove tests exports or some code for dev mode in production


##Licence

MIT