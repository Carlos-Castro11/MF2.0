import React from "react";

export const PopUpContext = React.createContext();

export const PopUpStorage = ({ children }) => {
  const [popUpActive, setPopUpActive] = React.useState(false);
  return (
    <PopUpContext.Provider value={{ popUpActive, setPopUpActive }}>
      {children}
    </PopUpContext.Provider>
  );
};
