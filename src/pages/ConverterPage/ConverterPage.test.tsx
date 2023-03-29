import { render } from "@testing-library/react";
import { ConverterPage } from "./ConverterPage";

describe(ConverterPage, () => {
  it("Renders ConverterPage correctly", () => {
    const tree = render(<ConverterPage />);

    expect(tree).toMatchSnapshot();
  });
});
