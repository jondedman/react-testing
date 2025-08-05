import { screen, render } from "@testing-library/react";

import Profile from "../src/components/Profile";

test("renders with the correct name", () => {
  // Setup - rendering the component on the page
  render(<Profile firstName="Jon" />);

  // Assert
  expect(screen.getByRole("heading")).toHaveTextContent("Jon");
});

test("renders with the correct job", () => {
  // Setup - rendering the component on the page
  render(<Profile firstName="Jon" job="Junior Developer"/>);

  // Assert
  expect(screen.getByText("Junior Developer")).toBeInTheDocument();
  expect(screen.getByText("Junior Developer").tagName).toBe("P");
});

test("renders with the correct birthdate", () => {
  // Setup - rendering the component on the page
  render(<Profile firstName="Jon" job="Junior Developer" birthdate="11/09/76"/>);

  // Assert
  expect(screen.getByText("11/09/76")).toBeInTheDocument();
  expect(screen.getByText("11/09/76").tagName).toBe("P");
  
});

