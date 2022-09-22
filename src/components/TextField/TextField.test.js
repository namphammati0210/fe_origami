import { render, screen } from "@testing-library/react";
import TextField from "./TextField";

test("renders TextField component", () => {
  render(<TextField label="test" type="text" errors={{}} />);

  const textElement = screen.getByText(/test/i); // document.querySelector

  expect(textElement).toBeInTheDocument();
});
