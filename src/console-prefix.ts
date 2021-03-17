/**
 * @param {T} prefix
 */
export = <T>(prefix: T): void => {
  const consoleTypes = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug
  }

  function setColor(type: string = '') {
    switch(type) {
      case 'log':
        return '\x1b[32m'
      case 'error':
        return '\x1b[31m'
      case 'warn':
        return '\x1b[33m'
      case 'info':
        return '\x1b[36m'
      case 'debug':
        return '\x1b[35m'
      case 'prefix':
        return '\x1b[1m'
      default:
        return '\x1b[0m'
    }
  }

  function setPrefix(type: string): string {
    const prefixMsg = typeof prefix === 'function' ? prefix() : prefix
    return `[${setColor(type) + type.toUpperCase() + setColor()}][${setColor('prefix') + setColor(type) + prefixMsg + setColor()}] =>`
  }

  Object.keys(consoleTypes).forEach(key => {
    const type = key as keyof typeof consoleTypes
    console[type] = function(...args: any[]) {
      args.unshift(setPrefix(type))
      consoleTypes[type](...args)
    }
  })
}
