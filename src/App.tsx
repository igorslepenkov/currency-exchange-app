import { Outlet } from "react-router-dom";
import { Header } from "./components";
import { AppContainer } from "./style";

export const App = () => {
  return (
    <AppContainer>
      <>
        <Header />
        <Outlet />
      </>
    </AppContainer>
  );
};
