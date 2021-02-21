import { useMemo } from "react";
import { useFetchCountries } from "./useFetchCountries";
import { pipe, filter, take, sortBy, toLower, prop, compose } from 'ramda'

const sortByName = sortBy(compose(toLower, prop('name')));

const MAX_RESULTS = 10

const filterResults = (term: string) => pipe(
  filter(c => new RegExp(term, 'i').test(c.name)),
  take(MAX_RESULTS),
  sortBy(sortByName)
)

export function useSearchCountries(term = "") {
  const { data: countries = [] } = useFetchCountries();
  return useMemo(() => {
    return term.trim() === "" ? [] : filterResults(term)(countries)
  }, [term, countries]);
}
