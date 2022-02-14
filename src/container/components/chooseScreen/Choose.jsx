import React, { useContext } from "react";
import {
  Fade,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";

import { useStyles } from "../../../styles";
import Logo from "../logo/Logo";
import { Store } from "../../../store/Store";
import { setOrderType } from "../../../store/actions";
import { useNavigate } from "react-router-dom";

export default function Choose() {
  const navigate = useNavigate();
  const styles = useStyles();
  const { dispatch } = useContext(Store);
  const chooseHandler = (orderType) => {
    setOrderType(dispatch, orderType);
    navigate("/order");
  };

  return (
    <Fade in={true}>
      <Box className={[styles.root, styles.navy]}>
        <Box className={[styles.main, styles.center]}>
          <Logo large></Logo>
          <Typography
            component="h3"
            variant="h3"
            className={styles.center}
            gutterBottom
          >
            Where will you be eatiing today?
          </Typography>
          <Box className={styles.cards}>
            <Card className={[styles.card, styles.space]}>
              <div onClick={()=> chooseHandler('Eat in')}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="././images/eatin.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    component="p"
                    variant="h4"
                    color="textPrimary"
                    gutterBottom
                  >
                    Eat in
                  </Typography>
                </CardContent>
              </div>
            </Card>
            <Card className={[styles.card, styles.space]}>
              <div onClick={()=> chooseHandler('TAke out')}>
                <CardMedia
                  component="img"
                  alt="Eat in"
                  image="././images/takeout.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    component="p"
                    variant="h4"
                    color="textPrimary"
                    gutterBottom
                  >
                    Take out
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Box>
        </Box>
      </Box>
    </Fade>
  );
}
