import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  MuiThemeProvider,
  createTheme,
  Container,
  CssBaseline,
  Paper,
} from "@material-ui/core";

import Home from "./container/components/homeScreen/Home";
import Choose from "./container/components/chooseScreen/Choose";
import Order from "./container/components/orderScreen/Order";
import Review from "./container/components/reviewScreen/Review";
import SelectPayment from "./container/components/selectPaymentScreen/SelectPayment";
import Payment from "./container/components/paymentScreen/Payment";
import CompleteOrder from "./container/components/completeOrderScreen/CompleteOrder";
import Admin from "./container/components/adminScreen/Admin";
import { Store } from "./store/Store";
import Queue from "./container/components/queueScreen/Queue";

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
  },
  palette: {
    primary: { main: "#ff1744" },
    secondary: {
      main: "#118e16",
      contrastText: "#ffffff",
    },
  },
});

function App() {
  const {state} = useContext(Store)
  return (
    <BrowserRouter >
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? 'lg' : 'sm'}>
          <Paper>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/choose" element={<Choose />} />
              <Route path="/order" element={<Order />} />
              <Route path="/review" element={<Review />} />
              <Route path="/queue" element={<Queue />} />
              <Route path="/select-payment" element={<SelectPayment />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/complete" element={<CompleteOrder />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </Paper>
        </Container>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
