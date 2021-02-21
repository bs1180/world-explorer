import React from 'react'
import { render } from '@testing-library/react'
import { Search } from './Search'
import { useSearchCountries } from '../hooks/useSearchCountries'
import userEvent from '@testing-library/user-event'

jest.mock("../hooks/useSearchCountries");

describe("<Search />", () => {
  test('fetchs results via hook', () => {
    const { getByLabelText } = render(<Search onSelect={jest.fn()} />)
    const input = getByLabelText(
      /Country search/
    )

    userEvent.type(input, "Genovia")

    expect(useSearchCountries).toHaveBeenCalledWith("Genovia")
  })

  test('results get rendered', () => {
    useSearchCountries.mockReturnValue([{name: "Genovia", code: "GEN"}, { name: "Moldavia", code: "MOV"}])

    const { getByLabelText, debug, container, getByText, getByTestId, getAllByRole } = render(<Search onSelect={jest.fn()} />)

    userEvent.type(getByLabelText(
      /Country search/
    ), "Genovia")

    expect(getByText("Moldavia")).toBeInTheDocument()
    expect(getByText("Genovia")).toBeInTheDocument()
    expect(getAllByRole("option").length).toEqual(2)
  })

  test('onSelect triggered with chosen result', () => {
    const mock = jest.fn()

    useSearchCountries.mockReturnValue([{name: "Genovia", code: "GEN"}])

    const { getByLabelText, getAllByRole } = render(<Search onSelect={mock} />)

    userEvent.type(getByLabelText(
      /Country search/
    ), "Genovia")

    expect(mock).not.toHaveBeenCalled()

    userEvent.click(getAllByRole("option")[0])

    expect(mock).toHaveBeenCalledWith("GEN")
  })

})
