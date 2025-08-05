import { screen, render } from "@testing-library/react";

import Profile from "../src/components/Profile";

describe("Profile should contain a heading element with the correct text", () => {
  it("Should render a h3 with the correct name", () => {
    render(<Profile name="Jon" />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.tagName).toBe("H3");
    expect(headingElement).toHaveTextContent("Jon");
  });

    it("Should render a 2 paragraph elements", () => {
    render(<Profile name="Jon" job="Developer" birthdate="11/09/76" />);
    const paragraph1 = screen.getByText("Developer");
    const paragraph2 = screen.getByText("11/09/76");
    expect(paragraph1.tagName).toBe("P");
    expect(paragraph2.tagName).toBe("P")
});
});