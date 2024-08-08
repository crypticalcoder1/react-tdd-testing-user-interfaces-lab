// src/__tests__/App.test.js
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  render(<App />);
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  expect(topLevelHeading).toBeInTheDocument();
});

test("renders an image with alt text 'A picture of myself'", () => {
  render(<App />);
  const image = screen.getByAltText("A picture of myself");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src"); // Ensure the src attribute exists
});

test("displays a second-level heading with the text 'About Me'", () => {
  render(<App />);
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a paragraph with the biography text", () => {
  render(<App />);
  const paragraph = screen.getByText(/This is my biography/i);
  expect(paragraph).toBeInTheDocument();
});

test("renders links to GitHub and LinkedIn", () => {
  render(<App />);
  const githubLink = screen.getByRole("link", { name: /GitHub/i });
  const linkedinLink = screen.getByRole("link", { name: /LinkedIn/i });

  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/your-profile");

  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-profile");
});
