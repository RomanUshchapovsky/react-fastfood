import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Box, Typography } from "@material-ui/core";
import TouchAppIcon from "@material-ui/icons/TouchApp";

import { useStyles } from "../../../styles";
import Logo from "../logo/Logo";

export default function Home() {
  const navigate = useNavigate();
  const styles = useStyles();
  return (
    <Card>
      <div onClick={() => navigate("/choose")}>
        <Box className={[styles.root, styles.red]} >
          <Box className={[styles.main, styles.center]}>
            <Typography component="h6" variant="h6">
              Fast Food
            </Typography>
            <Typography component="h1" variant="h1">
              Order <br /> & Pay <br /> here
            </Typography>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
          </Box>
          <Box className={[styles.green, styles.center]}>
            <Logo large />
            <Typography component="h5" variant="h5">
              Touch to start
            </Typography>
          </Box>
        </Box>
      </div>
    </Card>
  );
}
