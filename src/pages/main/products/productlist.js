import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  Grid,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import API from "../../../API";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
  },
}));

const ProductList = (props) => {
  const classes = useStyles();
  const { category } = props;
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    API.get("/products", {
      params: {
        idc: category.idc,
      },
    })
      .then((responce) => {
        setProducts(responce.data);
        setLoading(false);
        console.log(responce);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  }, [category]);

  return (
    <div className={classes.root}>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container>
          {products.results.map((product) => {
            return (
              <Grid item key={product.idp} xs={6} md={4} lg={2}>
                <img src={products.productImage} alt={products.name} />
                <Typography>{product.name}</Typography>
              </Grid>
            );
          })}
        </Grid>
      )}
    </div>
  );
};

ProductList.propTypes = {
  category: PropTypes.any.isRequired,
};

export default ProductList;
