import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Grid,
  Dialog,
  DialogTitle,
  Button,
  TextField,
  List,
  ListItem,
  Avatar,
  CircularProgress,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Alert } from "@material-ui/lab";

import { useStyles } from "../../../styles";
import {
  addToOrder,
  listCategories,
  listProducts,
  removeFromOrder,
} from "../../../store/actions";
import { Store } from "../../../store/Store";
import Logo from "../logo/Logo";
import OrderFooter from "./OrderFooter";

export default function Order(props) {
  const styles = useStyles();
  const [categoryName, setCategoryName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState({});
  const closeHandler = () => {
    setIsOpen(false);
  };
  const productClickHandler = (p) => {
    setProduct(p);
    setIsOpen(true);
  };
  const addToOrderHandler = () => {
    addToOrder(dispatch, { ...product, quantity });
    setIsOpen(false);
  };
  const cancelOrRemoveFromOrder = () => {
    removeFromOrder(dispatch, product);
    setIsOpen(false);
  };

  const { state, dispatch } = useContext(Store);
  const { categories, loading, error } = state.categoryList;
  const {
    products,
    loading: loadingProducts,
    error: errorProducts,
  } = state.productList;

  const { orderItems } = state.order;
  useEffect(() => {
    if (!categories) {
      listCategories(dispatch);
    } else {
      listProducts(dispatch, categoryName);
    }
  }, [dispatch, categories, categoryName]);

  const categoryClickHandler = (name) => {
    setCategoryName(name);
    listProducts(dispatch, categoryName);
  };

  return (
    <Box className={styles.root}>
      <Dialog
        maxWidth="sm"
        fullWidth={true}
        open={isOpen}
        onClose={closeHandler}
      >
        <DialogTitle className={styles.center}>Add {product.name}</DialogTitle>
        <Box className={[styles.row, styles.center]}>
          <Button
            variant="contained"
            color="primary"
            disabled={quantity === 1}
            onClick={(e) => quantity > 1 && setQuantity(quantity - 1)}
          >
            <RemoveIcon />
          </Button>
          <TextField
            inputProps={{ className: styles.largeInput }}
            InputProps={{
              bar: true,
              inputProps: {
                className: styles.largeInput,
              },
            }}
            className={styles.largeNumber}
            type="number"
            variant="filled"
            min={1}
            value={quantity}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => setQuantity(quantity + 1)}
          >
            <AddIcon />
          </Button>
        </Box>
        <Box className={[styles.row, styles.around]}>
          <Button
            onClick={cancelOrRemoveFromOrder}
            variant="contained"
            color="primary"
            size="large"
            className={styles.largeButton}
          >
            {orderItems.find((x) => x.name === product.name)
              ? "Remove From Order"
              : "Cancel"}
          </Button>

          <Button
            onClick={addToOrderHandler}
            variant="contained"
            color="primary"
            size="large"
            className={styles.largeButton}
          >
            ADD To Order
          </Button>
        </Box>
      </Dialog>
      <Box className={styles.main}>
        <Grid container>
          <Grid item md={2}>
            <List>
              {loading ? (
                <CircularProgress />
              ) : error ? (
                <Alert severity="error">{error}</Alert>
              ) : (
                <>
                  <ListItem onClick={() => categoryClickHandler("")} button>
                    <Logo></Logo>
                  </ListItem>
                  {categories.map((category) => (
                    <ListItem
                      button
                      key={category.name}
                      onClick={() => categoryClickHandler(category.name)}
                    >
                      <Avatar alt={category.name} src={category.image} />
                    </ListItem>
                  ))}
                </>
              )}
            </List>
          </Grid>
          <Grid item md={10}>
            <Typography
              gutterBottom
              className={styles.title}
              variant="h2"
              component="h2"
            >
              {categoryName || "Main Menu"}
            </Typography>
            <Grid container spacing={1}>
              {loadingProducts ? (
                <CircularProgress />
              ) : errorProducts ? (
                <Alert severity="error">{errorProducts}</Alert>
              ) : (
                products.map((product) => (
                  <Grid item md={6} key={product.id}>
                    <Card
                      className={styles.card}
                      onClick={() => productClickHandler(product)}
                    >
                      <div>
                        <CardMedia
                          component="img"
                          alt={product.name}
                          image={product.image}
                          className={styles.media}
                        />
                      </div>
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="body2"
                          color="textPrimary"
                          component="p"
                        >
                          {product.name}
                        </Typography>
                        <Box className={styles.cardFooter}>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {product.calorie} Cal
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textPrimary"
                            component="p"
                          >
                            $ {product.price}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/*  footer */}
      <OrderFooter />
    </Box>
  );
}
