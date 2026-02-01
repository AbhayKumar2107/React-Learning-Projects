import React from "react";

const ListItem = ({ id, name, link, icon, bgColor }) => { 
  return (
    <div
      className="ListItem"
      id={id}
      style={{
        height: 30,
        backgroundColor: bgColor
      }}
    >
      <img src={icon} alt={name} />
      <a href={link}>{name}</a>
    </div>
  );
};

export default ListItem; 
