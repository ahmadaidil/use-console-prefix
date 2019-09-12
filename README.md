# use-console-prefix
Add a custom prefix to every single console message

- How to install
  ```bash
  npm i use-console-prefix
  ```

- Example usage
  ```javascript
  // place it on top of your index project!
  require('use-console-prefix')('APP-1') // add prefix message here
  
  console.log('log message', { test: 1 }) // [LOG][APP-1] log message { test: 1 }
  console.error('error message') // [ERROR][APP-1] error message
  console.warn('warning message') // [WARN][APP-1] warning message
  console.info('info message') // [INFO][APP-1] info message
  console.debug('debug message', 'best') // [DEBUG][APP-1] debug message best
  ```

  - function example
  ```javascript
  require('use-console-prefix')(() => new Date().toString())

  console.log('test')

  setTimeout(() => console.log('after 1 minute'), 60000)

  /* e.g output:
  [LOG][Thu Sep 12 2019 18:54:16 GMT+0700 (Western Indonesia Time)] test
  [LOG][Thu Sep 12 2019 18:55:16 GMT+0700 (Western Indonesia Time)] after 1 minute
  */
  ```
---
&copy;2019 Ahmad Aidil
