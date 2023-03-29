export interface IParseRequestStringResult {
  baseCurrency: string;
  targetCurrency: string;
  amount: number;
}

export const parseRequestString = (
  requestString: string
): IParseRequestStringResult | null => {
  const regexp = /([0-9]+)\s*([a-z]{3})\s*in\s*([a-z]{3})/im;
  const match = requestString.match(regexp);

  if (!match || match.length !== 4) return null;

  return {
    amount: Number(match[1]),
    baseCurrency: match[2],
    targetCurrency: match[3],
  };
};
