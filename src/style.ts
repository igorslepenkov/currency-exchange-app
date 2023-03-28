import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
export const AppContainer = styled(Box)(
  ({ theme }) => `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${theme.palette.background.default};
  `
);
