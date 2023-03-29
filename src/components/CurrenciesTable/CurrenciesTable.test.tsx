import { render } from "@testing-library/react";
import { Currency } from "../../types";
import { CurrenciesTable } from "./CurrenciesTable";

describe(CurrenciesTable, () => {
  it("Renders correctly without currencies", () => {
    const handleBaseCurrencyChange = () => console.log("Change");
    const tree = render(
      <CurrenciesTable
        currencies={[]}
        baseCurrency="USD"
        handleBaseCurrencyChange={handleBaseCurrencyChange}
      />
    );
    expect(tree).toMatchSnapshot();
  });

  it("Renders correctly with currencies", () => {
    const handleBaseCurrencyChange = () => console.log("Change");
    const currencies: Currency[] = [
      ["EUR", 1.0812],
      ["RUB", 95.0215],
      ["GBP", 2.125],
      ["USD", 1],
    ];

    const tree = render(
      <CurrenciesTable
        currencies={currencies}
        baseCurrency="USD"
        handleBaseCurrencyChange={handleBaseCurrencyChange}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
