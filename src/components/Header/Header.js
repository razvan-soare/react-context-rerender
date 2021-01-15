import React, { memo } from "react";

const Header = ({ user }) => {
  return <h1>{user.name}</h1>;
};

const isSame = (prevProps, nextProps) => {
  if (prevProps.user.name === nextProps.user.name) {
    return true;
  }
  return false;
};

export default memo(Header, isSame);
