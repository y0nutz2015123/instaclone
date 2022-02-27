import React from "react";
import PropTypes from "prop-types";

const PostImage = ({ src, caption }) => {
  return <img src={`${src}`} alt={caption} className="" />;
};

export default PostImage;

PostImage.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
