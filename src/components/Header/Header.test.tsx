import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { Header } from "./Header";
import { render } from "@testing-library/react";

describe(Header, () => {
  it("Renders Header correctly", () => {
    const history = createMemoryHistory();

    const tree = render(
      <Router location={history.location} navigator={history}>
        <Header />
      </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
