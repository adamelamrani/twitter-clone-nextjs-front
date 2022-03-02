import { render, screen } from "@testing-library/react";
import Layout from "./Layout";

describe("Given a layout component", () => {
  describe("When it's rendered", () => {
    test("Then it should display a navigation bar", () => {
      const expectedElement = "navigation";

      render(<Layout />);

      const expectedOutput = screen.getByRole(expectedElement);

      expect(expectedOutput).toBeInTheDocument();
    });
  });
});
