import React, { useState } from "react";
import "./ListItem.css";

const ListItem = (props) => {
  const [isDone, setIsDone] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.checked;
    setIsDone(value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isDone}
        onChange={handleInputChange}
      />
      <span>{props.content}</span>
    </li>
  );
}

export default ListItem;