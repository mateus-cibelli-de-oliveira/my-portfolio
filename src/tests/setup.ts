import "@testing-library/jest-dom";
import { vi } from "vitest";

// -----------------------------------------------------
// Mock estável do IntersectionObserver
// -----------------------------------------------------
class MockIntersectionObserver {
  callback: IntersectionObserverCallback;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
  }

  observe = vi.fn().mockImplementation(() => {
    this.callback(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      this as unknown as IntersectionObserver
    );
  });

  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);

// -----------------------------------------------------
// Mock de matchMedia (necessário para MUI)
// -----------------------------------------------------
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // legado
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// -----------------------------------------------------
// Mock do ResizeObserver (usado pelo MUI)
// -----------------------------------------------------
class MockResizeObserver {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal("ResizeObserver", MockResizeObserver);

// -----------------------------------------------------
// Mock de requestAnimationFrame (necessário em animações)
// -----------------------------------------------------
vi.stubGlobal("requestAnimationFrame", (cb: FrameRequestCallback) => cb(0));
vi.stubGlobal("cancelAnimationFrame", vi.fn());