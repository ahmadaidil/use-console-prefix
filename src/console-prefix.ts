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

  function setPrefix(type: string) {
    const prefixMsg = typeof prefix === 'function' ? prefix() : prefix
    return `[${type.toUpperCase()}][${prefixMsg}]`
  }

  Object.keys(consoleTypes).forEach(key => {
    const type = key as keyof typeof consoleTypes
    console[type] = function(...args: any[]) {
      args.unshift(setPrefix(type))
      consoleTypes[type](...args)
    }
  })
}
