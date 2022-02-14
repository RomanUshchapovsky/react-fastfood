import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { useStyles } from "../../../styles";
import Logo from "../logo/Logo";
import { Store } from "../../../store/Store";
import { setPaymentType } from "../../../store/actions";

export default function SelectPayment(props) {
  const navigate = useNavigate();
  const { dispatch } = useContext(Store);
  const styles = useStyles();

  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    if (paymentType === "Pay here") {
      navigate("/payment");
    } else {
      navigate("/complete");
    }
  };
  return (
    <Box className={[styles.root, styles.navy]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          Select payment type
        </Typography>
      </Box>
      <Box className={styles.cards}>
        <Card className={[styles.card, styles.space]}>
          <div onClick={() => selectHandler("Pay here")}>
            <CardMedia
              component="img"
              alt="Pay here"
              image="././images/payhere.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                PAY HERE
              </Typography>
            </CardContent>
          </div>
        </Card>
        <Card className={[styles.card, styles.space]}>
          <div onClick={() => selectHandler("At counter")}>
            <CardMedia
              component="img"
              alt="At counter"
              image="././images/atcounter.png"
              className={styles.media}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
                component="p"
              >
                AT COUNTER
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Box>
    </Box>
  );
}
