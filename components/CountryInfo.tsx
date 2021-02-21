import { useFetchCountry } from '../hooks/useFetchCountry'

export const CountryInfo = ({ isoCode }) => {
  const { data, isLoading, error } = useFetchCountry(isoCode)

  if (isLoading) {
    return <div>loading</div>
  }

  if (error) {
    return <div>Error! { error }</div>
  }

  if (!data.country) {
    return <div>Oops, invalid country code</div>
  }

  const { country } = data
  
  return (
    <dl>
      <dt>name</dt>
      <dd>{ country.nativeName }</dd>
      <dt>languages</dt>
      <dd>{ country.languages.join(", ") }</dd>
      <dt>currency</dt>
      <dd>{ country.languages.join(", ") }</dd>
      <dt>states</dt>
      <dd>{ country.states.join(", ") }</dd>
    </dl>
  );
};