import { Paper, TextField, Typography } from "@mui/material";
import { Box, SxProps, Theme } from "@mui/system";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { exchangeRatesService } from "../../services";
import { pageStyles } from "../../ui";
import { parseRequestString } from "../../utils";

export const ConverterPage = () => {
  const paperStyles: SxProps<Theme> = (theme) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "300px",
    padding: "20px",
    borderRadius: "20px",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
    [theme.breakpoints.up("md")]: {
      width: "700px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "800px",
    },
  });

  const [input, setInput] = useState<string>("");
  const [convertResult, setConvertResult] = useState<number | null>(null);
  const [convertationError, setConvertationError] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value);
  };

  const debouncedInputValue = useDebounce(input, 1000);

  const convertCurrencies = async (debouncedValue: string) => {
    const parsedRequest = parseRequestString(debouncedValue);
    if (parsedRequest) {
      setConvertResult(await exchangeRatesService.convert(parsedRequest));
      return;
    }

    setConvertationError(
      "We couldn't parse your request, please check if its format is right"
    );
  };

  useEffect(() => {
    if (debouncedInputValue) {
      convertCurrencies(debouncedInputValue);
    }
  }, [debouncedInputValue]);

  return (
    <Box sx={pageStyles}>
      <Paper component="form" sx={paperStyles}>
        <Typography variant="h4" mb="20px">
          Converter:
        </Typography>
        <Typography variant="body1" color="error.light" mb="20px">
          Enter your request string in format "&#60;amount&#62; &#60;base
          currency code&#62; in &#60;target currency code&#62;"
        </Typography>
        <TextField
          type="text"
          label="Your request"
          fullWidth
          onChange={handleInputChange}
          helperText={convertationError}
          FormHelperTextProps={{
            error: !!convertationError,
          }}
        />
        {convertResult && (
          <Typography sx={{ width: "100%" }} variant="h6" mt="20px" ml="10px">
            Result : {convertResult}
          </Typography>
        )}
      </Paper>
    </Box>
  );
};
