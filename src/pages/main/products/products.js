import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import { CircularProgress, Tab } from "@material-ui/core";
import API from "../../../API";
import ProductList from "./productlist";

// function a11yProps(index) {
//   return {
//     id: `scrollable-auto-tab-${index}`,
//     "aria-controls": `scrollable-auto-tabpanel-${index}`,
//   };
// }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    justifyContent: "center",
  },
  progress: {
    marginTop: "32px",
    marginBottom: "32px",
  },
}));

const Product = () => {
  const classes = useStyles();
  const [selectedCategory, setselectedCategory] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  const handleChange = (event, newValue) => {
    setselectedCategory(newValue);
  };

  useEffect(() => {
    setCategoryLoading(true);
    API.get("/category", {
      params: {
        ordering: "created_on",
      },
    })
      .then((responce) => {
        setCategories(responce.data);
        setCategoryLoading(false);
      })
      .catch((error) => {
        setCategoryLoading(false);
        //TODO handle failures here
      });
  }, []);

  return (
    <div>
      <div className={classes.root}>
        {categoryLoading ? (
          <CircularProgress className={classes.progress} />
        ) : (
          <>
            <AppBar position="static" color="default">
              <Tabs
                value={selectedCategory}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {categories.map((category) => {
                  return (
                    <Tab
                      id={category.idc}
                      label={category.name}
                      key={category.idc}
                    />
                  );
                })}
              </Tabs>
            </AppBar>
          </>
        )}
      </div>
      {!categoryLoading && (
        <ProductList category={categories[selectedCategory]} />
      )}
    </div>
  );
};

export default Product;
