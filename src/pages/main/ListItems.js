import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import PropTypes from "prop-types";
import { navigate } from "@reach/router";

const MainListItems = () => {
  const [currentFragment, setCurrentFragment] = useState(0);

  const chnageFragmentTo = (numbre) => {
    setCurrentFragment(numbre);
    // eslint-disable-next-line default-case
    switch (numbre) {
      case 0:
        navigate("/");
        break;
      case 1:
        navigate("/orders");
        break;
      case 2:
        navigate("/suppliers");
        break;
    }
  };
  return (
    <div>
      <ListItem
        button
        selected={currentFragment === 0}
        onClick={() => chnageFragmentTo(0)}
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        selected={currentFragment === 1}
        onClick={() => chnageFragmentTo(1)}
      >
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
      <ListItem
        button
        selected={currentFragment === 2}
        onClick={() => chnageFragmentTo(2)}
      >
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem
        button
        selected={currentFragment === 3}
        onClick={() => chnageFragmentTo(3)}
      >
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem
        button
        selected={currentFragment === 4}
        onClick={() => chnageFragmentTo(4)}
      >
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </div>
  );
};

MainListItems.propTypes = {
  currentFragment: PropTypes.number.isRequired,
  fragmentChanger: PropTypes.func,
};

export default MainListItems;
