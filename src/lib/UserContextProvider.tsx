import React from "react";
import { Animal, animals } from "../stub";

interface UserContextData {
  animalsList: Animal[];
  setAnimalsList: React.Dispatch<React.SetStateAction<Animal[]>>;
}

const UserContext = React.createContext({} as UserContextData);

export const UserContextProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [animalsList, setAnimalsList] = React.useState([...animals]);
  console.log(animalsList, "context");

  return (
    <UserContext.Provider value={{ animalsList, setAnimalsList }}>
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext() {
  const context = React.useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext must be used within the UserContextProvider"
    );
  }

  return context;
}
