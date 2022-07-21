import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "next-themes";

import ThemeToggle from "../../../src/components/ThemeToggle";

describe("ThemeToggle Component", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    const localStorageMock = (function () {
      let store = {};

      return {
        getItem: function (key) {
          return store[key] || null;
        },
        setItem: function (key, value) {
          store[key] = value.toString();
        },
        removeItem: function (key) {
          delete store[key];
        },
        clear: function () {
          store = {};
        },
      };
    })();

    Object.defineProperty(window, "localStorage", {
      value: localStorageMock,
    });
  });

  it("should render sun icon on dark mode", () => {
    const { getByTestId } = render(<ThemeToggle />, {
      wrapper: ({ children }) => (
        <ThemeProvider defaultTheme="dark">{children}</ThemeProvider>
      ),
    });

    expect(getByTestId("sun")).toBeInTheDocument();
  });

  it("should render moon icon on light mode", () => {
    const { getByTestId } = render(<ThemeToggle />, {
      wrapper: ({ children }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      ),
    });

    expect(getByTestId("moon")).toBeInTheDocument();
  });

  it("should change theme on click", async () => {
    const { getByRole, getByTestId, findByTestId } = render(<ThemeToggle />, {
      wrapper: ({ children }) => (
        <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
      ),
    });

    expect(getByTestId("moon")).toBeInTheDocument();

    userEvent.click(getByRole("button"));

    expect(await findByTestId("sun")).toBeInTheDocument();

    expect(window.localStorage.getItem("theme")).toBe("dark");
  });
});
