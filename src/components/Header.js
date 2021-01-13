import React from "react";
import useStore from "../store/useStore";

const Header = () => {
  const { user } = useStore();
  return <h1>{user.name}</h1>;
};

export default Header;
