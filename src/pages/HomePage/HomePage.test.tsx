import { render } from "@testing-library/react";
import { HomePage } from "./HomePage";

describe(HomePage, () => {
  it("Renders HomePage correctly", () => {
    const tree = render(<HomePage />);

    expect(tree).toMatchSnapshot();
  });
});
