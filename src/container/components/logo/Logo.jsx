import React from "react";

import { useStyles } from "../../../styles";

export default function Logo(props) {
  const styles = useStyles();
  return (
    <img
      src="https://seeklogo.com/images/F/fastfood-logo-D673849A4C-seeklogo.com.png"
      alt="Food order"
      className={props.large ? styles.largeLogo : styles.logo}
    />
  );
}
