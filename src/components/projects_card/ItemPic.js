import React from 'react';
const ItemPic = ({ Link, alt, width, height }) => {
    return (
      <img src={Link} alt={alt} width={width} height={height}style={{marginLeft: "1.2rem", marginRight: "1.2rem"}} />
  );
};
export default ItemPic;
