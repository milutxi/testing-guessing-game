import { render, screen } from "@testing-library/react";
import WrongGuess from ".";

test("Wrong guess component is not being displayed in the document when page has rendered", () => {
  render(<WrongGuess />);
  const wrongGuess = screen.queryByRole("paragraph");

  expect(wrongGuess).not.toBeInTheDocument();
});