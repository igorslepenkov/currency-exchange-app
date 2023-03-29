import { useCallback, useEffect, useState } from "react";
import { Box, SelectChangeEvent, Typography } from "@mui/material";

import { exchangeRatesService } from "../../services";
import { Currency } from "../../types";
import { CurrenciesTable } from "../../components";
import { hoursInMs } from "../../utils";
import { pageStyles } from "../../ui";

export const CurrenciesPage = () => {
  const [baseCurrency, setBaseCurrency] = useState<string>("USD");
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  const handleBaseCurrencyChange = (event: SelectChangeEvent) => {
    setBaseCurrency(event.target.value as string);
  };

  const fetchCurrencies = useCallback(async () => {
    const currencies = await exchangeRatesService.getCurrencies({
      base: baseCurrency,
    });
    setCurrencies(currencies);
  }, [baseCurrency]);

  useEffect(() => {
    fetchCurrencies();
  }, [baseCurrency, fetchCurrencies]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchCurrencies();
    }, hoursInMs(2));

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={pageStyles} component="main">
      <Typography variant="h4" mb="20px">
        Known Currencies:
      </Typography>
      <CurrenciesTable
        currencies={currencies}
        baseCurrency={baseCurrency}
        handleBaseCurrencyChange={handleBaseCurrencyChange}
      />
    </Box>
  );
};
