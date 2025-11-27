import "@testing-library/jest-dom";
import { vi } from "vitest";

// ------------------------------
// Mock estável do IntersectionObserver
// ------------------------------
class MockIntersectionObserver {
  callback: any;

  constructor(callback: any) {
    this.callback = callback;
  }

  observe = vi.fn().mockImplementation(() => {
    // Força o elemento a ser considerado "visível"
    this.callback([{ isIntersecting: true }]);
  });

  unobserve = vi.fn();
  disconnect = vi.fn();
}

vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);