import React from 'react';
const ItemPic = ({ Link, alt, width, height, Checking }) => {
    return (
      <img src={Link} alt={alt} width={width} height={height}style={{marginLeft: "2rem"},{marginRight: "2rem"}} />
  );
};
export default ItemPic;
