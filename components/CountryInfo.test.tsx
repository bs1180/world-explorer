import React from "react";
import { render } from "@testing-library/react";
import { CountryInfo } from "./CountryInfo";
import { useFetchCountry } from "../hooks/useFetchCountry";

jest.mock("../hooks/useFetchCountry");

describe("<CountryInfo />", () => {
  test("fetchs results via hook", () => {
    (useFetchCountry as jest.Mock).mockReturnValue({
      data: {},
    });

    render(<CountryInfo isoCode="GEN" />);

    expect(useFetchCountry).toHaveBeenCalledWith("GEN");
  });

  test("results get rendered correctly", () => {
    (useFetchCountry as jest.Mock).mockReturnValue({
      data: {
        country: {
          nativeName: "Genovia",
          languages: ["French"],
          currency: "Franc",
          states: [],
        },
      },
    });

    const { container } = render(<CountryInfo isoCode="GEN" />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <dl>
          <dt>
            name
          </dt>
          <dd>
            Genovia
          </dd>
          <dt>
            languages
          </dt>
          <dd>
            French
          </dd>
          <dt>
            currency
          </dt>
          <dd>
            French
          </dd>
          <dt>
            states
          </dt>
          <dd />
        </dl>
      </div>
    `);
  });

  test("null result throws error", () => {
    (useFetchCountry as jest.Mock).mockReturnValue({
      data: {
        country: null
      },
    });

    const { getByText } = render(<CountryInfo isoCode="GEN" />);

    expect(getByText(/Oops, invalid country code/)).toBeInTheDocument()
  });
});
