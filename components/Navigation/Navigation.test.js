import { render, screen } from "@testing-library/react";
import Navigation from "./Navigation";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should display two links", () => {
      const linkOne = "Home";
      const linkTwo = "Tuit page";

      render(<Navigation />);

      const expectedTextOne = screen.getByRole("link", { name: linkOne });
      const expectedTextTwo = screen.getByRole("link", { name: linkTwo });

      expect(expectedTextOne).toBeInTheDocument();
      expect(expectedTextTwo).toBeInTheDocument();
      expect(expectedTextOne.textContent).toBe(linkOne);
      expect(expectedTextTwo.textContent).toBe(linkTwo);
    });
  });
});
