import { filterByName } from './useSearchCountries'

describe("Filter results utilities", () => {
  test("filterByName", () => {
    const f = filterByName("Foo")

    expect(f({name: "Foo"})).toEqual(true)
    expect(f({name: "foo"})).toEqual(true)
    expect(f({name: "oo"})).toEqual(true)
    expect(f({name: "bar"})).toEqual(false)
  })
})