import React, { Dispatch, SetStateAction, useContext, useState } from "react";

interface NavbarContextType {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>> ;
}

interface NavbarContextProps {
  children: React.ReactNode;
}

const NavbarContext = React.createContext<NavbarContextType>({
  opened: false,
  setOpened: () => {},
});

const NavbarProvider: React.FC<NavbarContextProps> = ({ children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <NavbarContext.Provider value={{ opened, setOpened }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  return context;
};

export default NavbarProvider;
