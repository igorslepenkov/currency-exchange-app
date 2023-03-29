import { useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TablePagination,
  TableRow,
  TableCell,
  TableFooter,
  Paper,
  SxProps,
  Theme,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  SelectChangeEvent,
} from "@mui/material";
import { Currency } from "../../types";
import { useWindowSize } from "../../hooks";
import { muiTheme } from "../../ui";

interface IProps {
  currencies: Currency[];
  baseCurrency: string;
  handleBaseCurrencyChange: (event: SelectChangeEvent) => void;
}

export const CurrenciesTable = ({
  currencies,
  baseCurrency,
  handleBaseCurrencyChange: setBaseCurrency,
}: IProps) => {
  const tableContainerStyles: SxProps<Theme> = (theme) => ({
    width: "300px",
    [theme.breakpoints.up("sm")]: {
      width: "500px",
    },
    [theme.breakpoints.up("md")]: {
      width: "700px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "1000px",
    },
  });

  const { width } = useWindowSize();
  const smallDisplayWidth = muiTheme.breakpoints.values.sm;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer sx={tableContainerStyles} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Index</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">
              Exchange Rate (relative to the base currency)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currencies.length > 0 &&
            currencies
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((currency) => (
                <TableRow key={currency[0]}>
                  <TableCell align="center">
                    {currencies.findIndex((cur) => cur[0] === currency[0]) + 1}
                  </TableCell>
                  <TableCell align="center">{currency[0]}</TableCell>
                  <TableCell align="center">{currency[1]}</TableCell>
                </TableRow>
              ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={width > smallDisplayWidth ? 2 : 3}
              align="right"
            >
              <FormControl fullWidth>
                <InputLabel id="base-currency-select-labe">
                  Base currency
                </InputLabel>
                <Select
                  labelId="base-currency-select-label"
                  id="base-currency-select"
                  variant="standard"
                  value={baseCurrency}
                  onChange={setBaseCurrency}
                >
                  {currencies.map((currency) => (
                    <MenuItem key={currency[0]} value={currency[0]}>
                      {currency[0]}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </TableCell>
          </TableRow>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              count={currencies.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};
