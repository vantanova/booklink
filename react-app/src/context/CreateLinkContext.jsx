import { createContext, useState, useContext } from "react";

const CreateLinkContext = createContext();

export const useCreateLinkContext = () => useContext(CreateLinkContext);

const CreateLinkProvider = ({ children }) => {
  const [showNewLink, setShowNewLink] = useState(false);

  return (
    <CreateLinkContext.Provider value={{ showNewLink, setShowNewLink }}>
      {children}
    </CreateLinkContext.Provider>
  );
};

export default CreateLinkProvider;
