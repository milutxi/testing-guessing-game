import { render, screen } from "@testing-library/react";
import RightGuess from ".";

test("Right guess component is not being displayed in the document when page has rendered", () => {
  render(<RightGuess />);
  const rightGuess = screen.queryByRole("paragraph");

  expect(rightGuess).not.toBeInTheDocument();
});