import React from "react";

function Button({
  variant = "primary",
  size = "normal",
  color = "#007bff",
  label,
  icon,
  iconLeft,
  iconRight,
  iconOnly,
  handleClick
}) {
  let classNames = `btn btn--${variant} btn--${size}`;

  const styles = {
    backgroundColor: variant === "primary" ? color : "transparent",
    color: variant === "tertiary" ? color : "",
  };

  return (
    <button onClick={handleClick} style={styles} className={classNames}>
      {iconLeft && iconLeft}
      {iconOnly ? icon : <span>{label}</span>}
      {iconRight && iconRight}
    </button>
  );
}
export default Button;
