import React from "react";
import { Button, makeStyles, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  buttonSuccess: {
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  buttonProgress: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
}));

const LoadingButton = (props) => {
  const classes = useStyles();
  const buttonClassname = clsx({
    [classes.buttonSuccess]: !props.loading,
  });
  return (
    <div className={classes.wrapper}>
      <Button
        {...props}
        variant="contained"
        color="primary"
        className={buttonClassname}
        disabled={props.loading}
        onClick={props.handleButtonClick}
      >
        {props.children}
      </Button>
      {props.loading && (
        <CircularProgress size={24} className={classes.buttonProgress} />
      )}
    </div>
  );
};

LoadingButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  loading: PropTypes.bool,
  handleButtonClick: PropTypes.any,
};

export default LoadingButton;
