import { render, screen } from "@testing-library/react";
import WrongGuess from "../../../../own-projects/challenges-and-practice/color-guessing/src/components/WrongGuess";

describe("Wrong guess functionaly works as expected", () => {
  const wrongGuess = screen.queryByRole("paragraph");

  test("Wrong guess component is not being displayed in the document when page has rendered", () => {
    render(<WrongGuess />);

    expect(wrongGuess).not.toBeInTheDocument();
  });
});
