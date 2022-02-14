import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { useStyles } from "../../../styles";
import { Store } from "../../../store/Store";
import Logo from "../logo/Logo";
import { createOrder } from "../../../store/actions";

export default function CompleteOrder(props) {
  const navigate = useNavigate();
  const styles = useStyles();
  const { state, dispatch } = useContext(Store);
  const { order } = state;
  const { loading, error, newOrder } = state.orderCreate;

  useEffect(() => {
    if (order.orderItems.length > 0) {
      createOrder(dispatch, order);
    }
  }, [dispatch, order]);
 
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Box>
          <Logo large></Logo>
          {loading ? (
            <CircularProgress></CircularProgress>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h3"
                component="h3"
              >
                Your order has been placed
              </Typography>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h1"
                component="h1"
              >
                Thank you!
              </Typography>
              <Typography
                gutterBottom
                className={styles.title}
                variant="h3"
                component="h3"
              >
                Your order number is {newOrder.number}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Box className={[styles.center, styles.space]}>
        <Button
          onClick={() => navigate("/")}
          variant="contained"
          color="primary"
          className={styles.largeButton}
        >
          Order Again
        </Button>
      </Box>
    </Box>
  );
}
