import axios from "axios";
import { Currency, IGetCurrenciesResult } from "../types";
import { IParseRequestStringResult } from "../utils";

enum CurrenciesAPIEndpoint {
  Latest = "latest",
}

interface IGetCurrenciesParams {
  base?: string;
  symbols?: string[];
  amount?: number;
}

class ExchangeRatesService {
  static _instance: ExchangeRatesService | null = null;

  BASE_URL = "https://api.exchangerate.host";
  API = axios.create({ baseURL: this.BASE_URL });

  public static get instance() {
    if (ExchangeRatesService._instance) {
      return ExchangeRatesService._instance;
    }

    ExchangeRatesService._instance = new ExchangeRatesService();
    return ExchangeRatesService._instance;
  }

  public async getCurrencies(
    params?: IGetCurrenciesParams
  ): Promise<Currency[]> {
    const { data } = await this.API.get<IGetCurrenciesResult>(
      CurrenciesAPIEndpoint.Latest,
      { params: { ...params, places: 4 } }
    );
    return Object.entries(data.rates);
  }

  public async convert({
    baseCurrency,
    targetCurrency,
    amount,
  }: IParseRequestStringResult): Promise<number> {
    const { data } = await this.API.get<IGetCurrenciesResult>(
      CurrenciesAPIEndpoint.Latest,
      {
        params: {
          base: baseCurrency.toUpperCase(),
          symbols: targetCurrency.toUpperCase(),
          amount,
          places: 4,
        },
      }
    );
    return data.rates[targetCurrency.toUpperCase()];
  }
}

export const exchangeRatesService = ExchangeRatesService.instance;
