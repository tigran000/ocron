import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MUIButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./OutlineButton.scss";

const useStyles = makeStyles({
  root: ({ width, height, margin, padding, fontSize }) => ({
    fontSize: `${fontSize}rem`,
    width: width,
    height: height,
    margin: margin,
    padding: padding,

    "&:hover": {
      fontSize: `${fontSize + 0.1}rem`
    }
  })
});

const OutlineButton = ({
  label,
  onClick,
  fontSize = 1.6,
  width = 240,
  height = 60,
  dark,
  disabled,
  loading = false,
  margin,
  padding
}) => {
  const classes = useStyles({ width, height, margin, padding, fontSize });

  return (
    <MUIButton
      className={
        !dark ? "CustomOutlineButton" : "CustomOutlineButton--darkfilled"
      }
      classes={{ root: classes.root }}
      onClick={onClick}
      disableTouchRipple={true}
      disabled={loading || disabled}
      variant="outlined"
    >
      {!loading ? (
        label
      ) : (
        <CircularProgress className="CustomOutlineButton--darkfilled__Progressbar" />
      )}
    </MUIButton>
  );
};

export default OutlineButton;
