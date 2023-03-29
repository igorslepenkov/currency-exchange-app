import { renderHook } from "@testing-library/react";
import { useWindowSize } from "./useWindowSize";

describe(useWindowSize, () => {
  it("Returns display width and height", () => {
    const { result } = renderHook(() => useWindowSize());

    const width = window.innerWidth;
    const height = window.innerHeight;

    expect(result.current).toEqual({ width, height });
  });
});
