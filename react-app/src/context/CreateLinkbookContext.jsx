import { createContext, useState, useContext } from "react";

const CreateLinkbookContext = createContext();

export const useCreateLinkbookContext = () => useContext(CreateLinkbookContext);

const CreateLinkbookProvider = ({ children }) => {
  const [showNewLinkbook, setShowNewLinkbook] = useState(false);

  return (
    <CreateLinkbookContext.Provider
      value={{ showNewLinkbook, setShowNewLinkbook }}
    >
      {children}
    </CreateLinkbookContext.Provider>
  );
};

export default CreateLinkbookProvider;
