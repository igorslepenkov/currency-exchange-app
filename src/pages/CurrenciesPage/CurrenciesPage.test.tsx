import { render } from "@testing-library/react";
import { CurrenciesPage } from "./CurrenciesPage";

describe(CurrenciesPage, () => {
  it("Renders CurrenciesPage correctly", () => {
    const tree = render(<CurrenciesPage />);

    expect(tree).toMatchSnapshot();
  });
});
