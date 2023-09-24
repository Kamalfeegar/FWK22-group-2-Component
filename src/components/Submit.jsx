import React from "react";
import PropTypes from "prop-types";

const SubmitInput = ({ value, isPending, backgroundColor = "#19366d8c", color = "white", height = '3rem', width = '34rem', borderRadius = '5px', fontSize = "25px", border = '2px solid #19366d8c', ...props }) => {
  const style = {
    backgroundColor,
    color,
    height,
    width,
    borderRadius,
    fontSize,
    border,
  };

  return (
    <input
      type='submit'
      value={isPending ? "Adding blog..." : value}
      disabled={isPending}
      style={style}
    />
  );
};

SubmitInput.propTypes = {
  value: PropTypes.string,
  backgroundColor: PropTypes.string,
  height: PropTypes.string,
  isPending: PropTypes.bool,
  width: PropTypes.string,
  borderRadius: PropTypes.string,
  fontSize: PropTypes.string,
  border: PropTypes.string,
};

export default SubmitInput;
