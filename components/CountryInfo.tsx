import { useFetchCountry } from '../hooks/useFetchCountry'

const FactCard = ({ title, body }) => {
  return body ? <div className="p-8">
    <dd className="font-bold">{ title }</dd>
    <dt className="">{ body }</dt>
  </div> : null
}

export const CountryInfo = ({ isoCode }) => {
  const { data, isLoading, error } = useFetchCountry(isoCode)

  if (isLoading) {
    return <div data-testid="loading-spinner" className="p-32">Loading...</div>
  }

  if (error) {
    return <div>Error! { error }</div>
  }

  if (!data.country) {
    return <div>Oops, invalid country code</div>
  }

  const { country } = data
  
  return (
    <dl className="bg-red-300 flex flex-wrap">
      <FactCard title="Name" body={country.nativeName} />
      <FactCard title="Currency" body={country.currency} />
      <FactCard title="Capital" body={country.capital} />
      <FactCard title="Languages" body={country.languages.join(", ")} />
      <FactCard title="States" body={country.states.join(", ")} />

    </dl>
  );
};