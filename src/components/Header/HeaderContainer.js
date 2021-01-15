import React from "react";
import useStore from "../../store/useStore";
import Header from "./Header";

const HeaderContainer = () => {
  const { user } = useStore();
  return <Header user={user} />;
};

export default HeaderContainer;
