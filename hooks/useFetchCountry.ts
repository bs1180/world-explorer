import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const ENDPOINT = "https://countries.trevorblades.com/";

export type Country = {
  name: string;
  code: string;
  nativeName: string;
  languages: string[];
  states: string[];
  currency: string
  capital: string
};

export function useFetchCountry(countryCode: string) {
  return useQuery<{country: Country}>(["country", countryCode], async () => {
    const res = await request(
      ENDPOINT,
      gql`
        query GetCountry($countryCode: ID!) {
          country(code: $countryCode) {
            name
            code
            nativeName: native
            languages {
              name
            }
            states {
              name
            }
            currency
            capital
          }
        }
      `,
      { countryCode }
    ).then((result) => {
      return result.country
        ? {
            country: {
              ...result.country,
              states: result.country.states.map((s) => s.name),
              languages: result.country.languages.map((l) => l.name),
            },
          }
        : result;
    });

    return res;
  });
}
