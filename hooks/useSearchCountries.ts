import { useMemo } from "react";
import { useFetchCountries } from "./useFetchCountries";
import { pipe, filter, take, sortBy, toLower, prop, compose } from 'ramda'

const MAX_RESULTS = 10

export const filterByName = term => c => new RegExp(term, 'i').test(c.name)
export const sortByName = sortBy(compose(toLower, prop('name')));

const filterResults = (term: string) => pipe(
  filter(filterByName(term)),
  take(MAX_RESULTS),
  sortBy(sortByName)
)

export function useSearchCountries(term = "") {
  const { data: countries = [] } = useFetchCountries();
  return useMemo(() => {
    return term.trim() === "" ? [] : filterResults(term)(countries)
  }, [term, countries]);
}
