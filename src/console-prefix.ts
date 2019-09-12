export = (prefix: string): void => {
  const consoleTypes = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug
  }

  Object.keys(consoleTypes).forEach(key => {
    const type = key as keyof typeof consoleTypes
    console[type] = function(...args: any[]) {
      args.unshift(`[${type.toUpperCase()}][${prefix}]`)
      consoleTypes[type](...args)
    }
  })
}
