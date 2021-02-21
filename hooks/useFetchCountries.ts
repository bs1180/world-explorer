import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const ENDPOINT = "https://countries.trevorblades.com/";

export type Country = {
  name: string
  code: string
}

export function useFetchCountries() {
  return useQuery<Country[]>("countries", async () => {
    const { countries } = await request(
      ENDPOINT,
      gql`
        query {
          countries {
            name
            code
          }
        }
      `
    );

    return countries;
  });
}
