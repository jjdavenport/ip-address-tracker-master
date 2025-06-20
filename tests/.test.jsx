import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header, Input } from "../src/components/index";

describe("Header", () => {
  it("checks the header title is visible", () => {
    const { getByText } = render(<Header />);
    expect(getByText("IP Address Tracker")).toBeVisible();
  });
});

describe("Input", () => {
  it("checks the Input placeholder text is visible", () => {
    const { getByPlaceholderText } = render(<Input />);
    expect(getByPlaceholderText("Search for any IP address")).toBeVisible();
  });
});
