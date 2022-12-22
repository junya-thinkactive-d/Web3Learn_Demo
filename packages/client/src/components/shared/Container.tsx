import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="px-60 py-40">{children}</div>;
};

export default Container;
