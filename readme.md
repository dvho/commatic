# Commatic
[_Commatic_](https://www.npmjs.com/package/commatic) is a lightweight comma delimiter for formatting numbers into standard form periods. Everyone needs one of these.

<img src="https://user-images.githubusercontent.com/45696445/67348320-8456ac80-f512-11e9-9e33-d8b91b7fd283.gif">

_________________________
## API
### commatic(`number`)
```js
var commatic = require('commatic');

```
&nbsp;
_________________________
#### -- Example 1 --
```js
console.log(commatic(10000000));
```
> Output will be:
```
10,000,000
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 2 --
```js
console.log(commatic(43624595635));
```
> Output will be:
```
43,624,595,635
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 3 --
```js
console.log(commatic(-165778065));
```
> Output will be:
```
-165,778,065
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 4 --
```js
console.log(commatic(8732418.5682));
```
> Output will be:
```
8,732,418.5682
```
_________________________
&nbsp;
&nbsp;
_________________________
#### -- Example 5 --
```js
console.log(commatic(87));
```
> Output will be:
```
87
```
_________________________
&nbsp;
## Notes
[_Commatic_](https://www.npmjs.com/package/commatic) is a lightweight comma delimiter for formatting numbers into standard form periods. Everyone needs one of these.

## Installation
With [npm](http://npmjs.org) do
```bash
$ npm install commatic
```

## License
(MIT)

Copyright (c) 2019 David H. &lt;email6@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
