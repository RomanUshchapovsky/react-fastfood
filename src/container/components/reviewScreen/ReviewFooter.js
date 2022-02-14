import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

import { useStyles } from "../../../styles";
import { Store } from "../../../store/Store";

export default function ReviewFooter() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { orderType, orderItems, itemsCount, totalPrice, taxPrice } =
    state.order;
  const procedToCheckoutHandler = () => {
    navigate("/select-payment");
  };

  return (
    <footer>
      <Box className={[styles.bordered, styles.space]}>
        <b>My Order</b> - {orderType === "takeout" ? "Take out" : "Eat in"} |{" "}
        <b>Tax:</b>${taxPrice} | <b>Total:</b> ${totalPrice} | <b>Items:</b>{" "}
        {itemsCount}
      </Box>
      <Box className={[styles.row, styles.around]}>
        <Button
          onClick={() => {
            navigate(`/order`);
          }}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Back
        </Button>
        <Button
          onClick={procedToCheckoutHandler}
          variant="contained"
          color="secondary"
          disabled={orderItems.length === 0}
          className={styles.largeButton}
        >
          Proceed To Checkout
        </Button>
      </Box>
    </footer>
  );
}
