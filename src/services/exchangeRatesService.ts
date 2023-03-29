import axios from "axios";
import { Currency, IGetCurrenciesResult } from "../types";

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
      { params }
    );
    return Object.entries(data.rates);
  }
}

export const exchangeRatesService = ExchangeRatesService.instance;
