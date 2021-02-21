import { request, gql } from "graphql-request";
import { useQuery } from "react-query";

const { NEXT_PUBLIC_GRAPHQL_API } = process.env

export type Country = {
  name: string
  code: string
}

export function useFetchCountries() {
  return useQuery<Country[]>("countries", async () => {
    const { countries } = await request(
      NEXT_PUBLIC_GRAPHQL_API,
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
