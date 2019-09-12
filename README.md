# use-console-prefix
Add a custom prefix to every single console message

- How to install
  ```bash
  npm i use-console-prefix
  ```

- Example usage
  ```javascript
  /**
   * place it on top of your index project!
   * @param {string}
   */
  require('use-console-prefix')('APP-1') // add prefix message here
  
  console.log('log message', { test: 1 }) // [LOG][APP-1] log message { test: 1 }
  console.error('error message') // [ERROR][APP-1] error message
  console.warn('warning message') // [WARN][APP-1] warning message
  console.info('info message') // [INFO][APP-1] info message
  console.debug('debug message', 'best') // [DEBUG][APP-1] debug message best
  ```
---
&copy;2019 Ahmad Aidil
