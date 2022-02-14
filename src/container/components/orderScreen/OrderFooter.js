import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button } from "@material-ui/core";

import { clearOrder } from "../../../store/actions";
import { useStyles } from "../../../styles";
import { Store } from "../../../store/Store";

export default function OrderFooter() {
  const styles = useStyles();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(Store);
  const { orderType, orderItems, itemsCount, totalPrice, taxPrice } =
    state.order;

    const previewOrderHandler = () => {
        navigate(`/review`);
      };

  return (
    <footer>
      <Box className={[styles.bordered, styles.space]}>
        My Order - {orderType} | Tax: $ {taxPrice} | Total: $ {totalPrice} |
        Items: {itemsCount}
      </Box>
      <Box className={[styles.row, styles.around]}>
        <Button
          onClick={() => {
            clearOrder(dispatch);
            navigate(`/`);
          }}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Cancel Order
        </Button>
        <Button
          onClick={previewOrderHandler}
          variant="contained"
          color="primary"
          disabled={orderItems.length === 0}
          className={styles.largeButton}
        >
          Done
        </Button>
      </Box>
    </footer>
  );
}
