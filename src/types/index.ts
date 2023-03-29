export type Rates = {
  [key: string]: number;
};

export interface IGetCurrenciesResult {
  motd: {
    msg: string;
    url: string;
  };
  success: boolean;
  base: string;
  date: string;
  rates: Rates;
}

export type Currency = [string, number];
