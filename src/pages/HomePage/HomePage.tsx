import {
  Box,
  Button,
  Typography,
  Paper,
  Theme,
  ButtonGroup,
} from "@mui/material";
import { SxProps } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { ROUTE, RouteKey } from "../../router";

export const HomePage = () => {
  const pageStyles: SxProps = {
    position: "relative",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const greetingTextStyles: SxProps = {
    "@keyframes appear": {
      "0%": {
        opacity: 0,
      },
      "20%": {
        opacity: 0.2,
      },
      "40%": {
        opacity: 0.4,
      },
      "60%": {
        opacity: 0.6,
      },
      "80%": {
        opacity: 0.8,
      },
      "100%": {
        opacity: 1,
      },
    },

    "@keyframes dissapear": {
      "0%": {
        opacity: 1,
      },
      "20%": {
        opacity: 0.8,
      },
      "40%": {
        opacity: 0.6,
      },
      "60%": {
        opacity: 0.4,
      },
      "80%": {
        opacity: 0.2,
      },
      "100%": {
        opacity: 0,
        display: "none",
      },
    },
    opacity: 0,
    animationName: "appear, dissapear",
    animationDuration: "3s, 3s",
    animationDelay: "0s, 3s",
    animationFillMode: "forwards, forwards",
    animationTimingFunction: "ease-in-out, ease-in-out",
    textAlign: "center",
  };

  const panelStyles: SxProps<Theme> = (theme) => ({
    "@keyframes appear": {
      "0%": {
        opacity: 0,
      },
      "20%": {
        opacity: 0.2,
      },
      "40%": {
        opacity: 0.4,
      },
      "60%": {
        opacity: 0.6,
      },
      "80%": {
        opacity: 0.8,
      },
      "100%": {
        opacity: 1,
      },
    },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "300px",
    width: "300px",
    padding: "10px",
    borderRadius: "20px",
    opacity: 0,
    animationName: "appear",
    animationDelay: "6.5s",
    animationDuration: "2s",
    animationFillMode: "forwards",
    animationTimingFunction: "ease-in-out",
    [theme.breakpoints.up("sm")]: {
      width: "400px",
    },
    [theme.breakpoints.up("md")]: {
      width: "600px",
    },
  });

  const navigate = useNavigate();

  return (
    <Box sx={pageStyles} component="main">
      <Typography variant="h2" color="secondary" sx={greetingTextStyles}>
        Welcome to Exchage App!
      </Typography>

      <Typography
        variant="h4"
        sx={{ ...greetingTextStyles, animationDelay: "1s, 4s" }}
      >
        We are glad to see you!
      </Typography>
      <Paper sx={panelStyles}>
        <Typography variant="h4" mb="15px">
          Choose page:
        </Typography>
        <ButtonGroup variant="contained" size="large" fullWidth>
          <Button
            color="secondary"
            sx={{ flexGrow: 1 }}
            type="button"
            onClick={() => navigate(ROUTE[RouteKey.Converter])}
          >
            Converter
          </Button>
          <Button
            color="secondary"
            sx={{ flexGrow: 1 }}
            type="button"
            onClick={() => navigate(ROUTE[RouteKey.Currencies])}
          >
            List of Currencies
          </Button>
        </ButtonGroup>
      </Paper>
    </Box>
  );
};
