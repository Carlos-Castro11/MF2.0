import React from "react";

export const PopUpContext = React.createContext();

export const PopUpStorage = ({ children }) => {
  const [popUpActive, setPopUpActive] = React.useState(false);
  const [footerVisible, setFooterVisible] = React.useState(false);
  return (
    <PopUpContext.Provider
      value={{ popUpActive, setPopUpActive, footerVisible, setFooterVisible }}
    >
      {children}
    </PopUpContext.Provider>
  );
};
