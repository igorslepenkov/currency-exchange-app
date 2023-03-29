import { parseRequestString } from "./parseRequestString";

describe(parseRequestString, () => {
  it("Parses string with right format with spaces", () => {
    const string = "Please show me how much is 25 usd in eur";
    const result = parseRequestString(string);
    expect(result).toEqual({
      amount: 25,
      baseCurrency: "usd",
      targetCurrency: "eur",
    });
  });

  it("Parses string with right format without spaces", () => {
    const string = "Please show me how much is 25usdineur";
    const result = parseRequestString(string);
    expect(result).toEqual({
      amount: 25,
      baseCurrency: "usd",
      targetCurrency: "eur",
    });
  });

  it("Returns null if the format is not right", () => {
    const string = "Please show me how much is 25 usd in eu";
    const result = parseRequestString(string);
    expect(result).toBe(null);
  });
});
