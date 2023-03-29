import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { LinkWithoutStyles } from "./LinkWithoutStyles";

describe(LinkWithoutStyles, () => {
  it("Renders LinkWithoutStyles correctly", () => {
    const history = createMemoryHistory();

    const tree = render(
      <Router location={history.location} navigator={history}>
        <LinkWithoutStyles to="/">Link</LinkWithoutStyles>
      </Router>
    );

    expect(tree).toMatchSnapshot();
  });
});
