/*When you require('./mmm')  it runs the JavaScript inside
the mmm.js file and returns an object. Under the hood in the Node module system,
the result of require is cached after the first time it’s called for a specific module.
This means multiple calls to require('./mmm') will always return the same instance
of the mmm module.This done for mitigate the performance overhead.
 One
important caveat is that the cache key used is based on the resolved file name. So
if a program requires mmm multiple times, but the required path is different (re-
quire("mmm") versus require('./othermodule/node_modules/mmm')), it’s enough
to “break cache,” and this would be treated as loading a new module.

.
Run another program caching.js to see caching effect.
*/

var m = require('./mmm');
console.log(m.add(3,5));
console.log(m.multiply(4,5));
console.log(m.factorial(4));

