--
Title: 5 Ways to export the same Node.js module
Description: 5 Ways to export the same Node.js module
Date: 03.15.12
Keywords: Module,Node.js,Export,module.exports
--

When I look through the code of some of my first [Node.JS](http://nodejs.org/) modules that I wrote I look at the different ways that I handled their class structure and export. It's all eye-candy to me, but pick your favorite, or .apply() as argumented.

This module is called **"dude"**, and all it does is one thing (for brevity) via a public method named **"say"**.

**Usage.js**

```javascript

var dude = require('./dude');

dude.say('hey bro.');

```

**Method #1:**

```javascript

var dude = module.exports = function(){};

dude.say = function(message) {
  console.log(message);
};

```

**Method #2:**

```javascript

var dude = module.exports = {
  say : function(message) {
    console.log(message);
  }
};

```

**Method #3:**

```javascript

exports.say = function(message) {
  console.log(message);
};

```

**Method #4:**

```javascript

module.exports = Object.create({
  say : function(message) {
    console.log(message);
  }
});

```

**Usage for #5 (using {params}):**

```javascript

var dude = new require('./dude')(/* params? */);

dude.say('hey bro.');

```

**Method #5:**

```javascript

module.exports = function(params) {
  return {
    say : function(message) {
      console.log(message);
    }
  }
}

```

Use on a case by case basis.
