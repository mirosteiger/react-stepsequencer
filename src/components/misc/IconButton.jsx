import React from "react";
import { TransportItemWrapper, CustomButton } from "../../styles/styles";

const IconButton = ({ icon, name, radius, style, active, onClick }) => {
  return (
    <TransportItemWrapper style={style}>
      <CustomButton active={active} onClick={onClick}>
        <img src={icon} alt={name} width={radius} height={radius} />
      </CustomButton>
    </TransportItemWrapper>
  );
};

export default IconButton;
