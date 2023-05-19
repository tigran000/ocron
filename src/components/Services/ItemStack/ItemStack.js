import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./ItemStack.scss";

const colorAnimationLength = "4s";
const hoverAnimationLength = "0.4s";
const hoverAnimationLengthNum = 400;

function ItemStack({
  title,
  subtitle,
  imageUrl,
  imageHeightMult = 0.95,
  logo,
  logoMult = 1,
  toColor = "#61dcfb",
  toHoverColor = "#61dcfb",
  changedColors
}) {
  const [isHover, setIsHover] = useState(false);
  const [hoverAnimating, setHoverAnimating] = useState(false);

  const setImageMultiplier = () => {
    if (isHover) {
      return imageHeightMult < 1 ? 1.05 : 1.1;
    }

    return 1;
  };

  const handleHover = () => {
    setIsHover(true);

    setHoverAnimating(true);
    setTimeout(() => setHoverAnimating(false), hoverAnimationLengthNum);
  };

  const handleHoverOut = () => {
    setIsHover(false);

    setHoverAnimating(true);
    setTimeout(() => setHoverAnimating(false), hoverAnimationLengthNum);
  };

  const getItemColor = () => {
    if ((isHover && !changedColors) || (!isHover && changedColors)) {
      return toHoverColor;
    }

    return toColor;
  };

  const getTransitionTime = () => {
    if (hoverAnimating) {
      return hoverAnimationLength;
    }

    return colorAnimationLength;
  };

  return (
    <div className="ItemStack">
      <Card
        className="ItemStack__Card"
        style={{
          //background: `linear-gradient(135deg, #ffffff 0%, ${toColor}E6 50%, #ffffff 100%)`,
          //opacity: isHover && 0.83
          background: getItemColor(),
          transition: getTransitionTime()
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <CardContent
          className="ItemStack__Card__Background"
          style={{
            //backgroundImage: `url(${imageUrl})`,
            height: 250 * imageHeightMult * setImageMultiplier()
          }}
        >
          <img
            style={{ width: 70 * logoMult * 1.3 * (isHover ? 1.07 : 1) }}
            className="ItemStack__Card__Background__Logo"
            src={logo}
            alt="title"
          />
        </CardContent>
      </Card>
      <Typography className="ItemStack__Title">{title}</Typography>
      <Typography className="ItemStack__Subtitle">{subtitle}</Typography>
    </div>
  );
}

export default ItemStack;
