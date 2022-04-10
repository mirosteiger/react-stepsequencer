import React from "react";
import { TransportItemWrapper, CustomButton } from "../../styles/styles";

const IconButton = ({
  style,
  active,
  onClick,
  children,
}) => {
  return (
    <TransportItemWrapper style={style}>
      <CustomButton active={active} onClick={onClick}>
        {children}
      </CustomButton>
    </TransportItemWrapper>
  );
};

export default IconButton;
