import { hoursInMs } from "./hoursInMs";

describe(hoursInMs, () => {
  it("Returns right amount of ms in 1 hour", () => {
    const result = hoursInMs(1);
    expect(result).toEqual(3.6e6);
  });
});
