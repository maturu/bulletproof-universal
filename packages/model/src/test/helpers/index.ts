type FactoryFunction<T, K> = unknown extends T ? () => Promise<K> : (args: T) => Promise<K>

export const lazyLet = <T, U>(factory: FactoryFunction<T, U>) => {
  let cache: U
  let initialized = false

  beforeEach(() => {
    initialized = true
  })

  return async (args: T) => {
    if (initialized) {
      cache = await factory(args)
      initialized = false
    }
    return cache
  }
}
