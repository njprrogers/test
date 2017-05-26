# Flow Front-end Interview Questions

This repo is set up as a _monorepo_ using [lerna](https://github.com/lerna/lerna) (like [babel](https://github.com/babel/babel/tree/master/packages) and stuff) where each of the packages will be an interview excercise.

## Excercises

### Classlist

In this excercise we will create something like the [Element.classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) api. The interviewing engineer(s) will work with the candidate to implement a solution to make the tests pass. It is recommended that you provide an editor, a terminal window with the tests running, and a browser for the candidate to reference.

Here's a summary of the task:

```js

  const classlist = require('path/to/solution');

  element = document.createElement('div');
  element.className = 'foo bar';

  classlist.contains(element, 'foo'); // true
  classlist.contains(element, 'nope'); // false

  classlist.add(element, 'bim'); // element.className = 'foo bar bim'
  classlist.add(element, 'boo', 'biff', 'bip'); // element.className = 'foo bar boo biff bip'

  classlist.remove(element, 'bar'); // element.className = 'foo'
  classlist.remove(element, 'foo', 'bar'); // element.className = ''

  classlist.toggle(element, 'foo'); // element.className = 'bar'

  classlist.item(element, 1); // 'bar'
```
