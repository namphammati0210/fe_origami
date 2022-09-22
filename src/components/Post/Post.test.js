import { render, screen } from "@testing-library/react";
import Post from "./Post";

test("renders Post component", () => {
  render(<Post />);

  const textElement = screen.getByText(/Author/i); // document.querySelector

  expect(textElement).toBeInTheDocument();
});
