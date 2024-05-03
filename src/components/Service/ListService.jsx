import React from "react";

function ListService({ description }) {
  return (
    <li className="flex gap-5">
      <img src={serviceIcon} alt="" />
      <p> {description} </p>
    </li>
  );
}

export default ListService;
