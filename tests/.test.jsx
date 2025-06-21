import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Header, Input, Card, Map } from "../src/components/index";

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

  it("checks the input button contains an img", () => {
    const { getByRole } = render(<Input />);
    const button = getByRole("button");
    const img = button.querySelector("img");
    expect(button).toContainElement(img);
  });
});

describe("Card", () => {
  it("checks the list items text is visible", () => {
    const { getByText } = render(<Card />);
    expect(getByText("IP Address")).toBeVisible();
    expect(getByText("Location")).toBeVisible();
    expect(getByText("Timezone")).toBeVisible();
    expect(getByText("ISP")).toBeVisible();
  });

  it("checks the list items each have data passed to them", () => {
    const { getAllByTestId } = render(
      <Card ip="test" city="test" country="test" timeZone="test" isp="test" />,
    );
    const spans = getAllByTestId("span");
    spans.forEach((span) => {
      expect(span.textContent).not.toBe("");
    });
  });
});

describe("map", () => {
  it("checks the map attribution has three links", () => {
    render(<Map lat={51.505} lng={-0.09} />);
    const links = document.querySelectorAll(".leaflet-control-attribution a");
    expect(links.length).toBe(3);
  });

  it("checks the link names are correct", () => {
    render(<Map lat={51.505} lng={-0.09} />);
    const links = document.querySelectorAll(".leaflet-control-attribution a");
    expect(links[1]).toHaveTextContent(/Frontend Mentor/i);
    expect(links[2]).toHaveTextContent(/jjdavenport/i);
  });

  it("checks the links href is correct", () => {
    render(<Map lat={51.505} lng={-0.09} />);
    const links = document.querySelectorAll(".leaflet-control-attribution a");
    expect(links[1]).toHaveAttribute(
      "href",
      "https://www.frontendmentor.io?ref=challenge",
    );
    expect(links[2]).toHaveAttribute("href", "https://github.com/jjdavenport");
  });

  it("checks the frontend link opens in a new window", () => {
    render(<Map lat={51.505} lng={-0.09} />);
    const links = document.querySelectorAll(".leaflet-control-attribution a");
    expect(links[1]).toHaveAttribute("target", "_blank");
  });

  it("checks the links have text decoration underline style applied", () => {
    render(<Map lat={51.505} lng={-0.09} />);
    const links = document.querySelectorAll(".leaflet-control-attribution a");
    expect(links[1]).toHaveStyle("text-decoration: underline");
    expect(links[2]).toHaveStyle("text-decoration: underline");
  });
});
