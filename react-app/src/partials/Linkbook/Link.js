import Dropdown from "../../utils/Dropdown";
import Modal from "../../utils/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Link({ link }) {
  const dispatch = useDispatch();

  console.log(link);

  return (
    <div
      data-aos="fade-in"
      className="m-5 bg-gray-100 border border-gray-300 h-56 w-56 rounded-lg shadow-md border-b border-primary flex p-2 relative"
    >
      {link.name}
    </div>
  );
}

export default Link;
