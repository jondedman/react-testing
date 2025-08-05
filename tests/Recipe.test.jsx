import { screen, render } from "@testing-library/react";

import Recipe from "../src/components/Recipe";

describe("Profile should contain a heading element with the correct text", () => {
  it("Should render a h1 with the correct name", () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />
);
    const headingElement = screen.getByRole("heading");
    expect(headingElement.tagName).toBe("H3");
    expect(headingElement).toHaveTextContent("Finnish cinnamon buns");
  });

    it("Should render a paragraph with the correct type", () => {
    render(<Recipe title="Finnish cinnamon buns" type="dessert" duration={60} />
);
    const type = screen.getByText("dessert")
    expect(type.tagName).toBe("P");
    const duration = screen.getByText("60")
    expect(duration.tagName).toBe("P");
  });

});