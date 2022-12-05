import { createContext, useState } from "react";

export const ContentContext = createContext();

export const ContentProvider = ({ children }) => {

  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [active, setActive] = useState('Posts');

  const INITIAL_DATA = {
    navbar: ['Posts', 'Users'],
    active,
    setActive,
    isLoading,
    setLoading,
    content,
    setContent,
  };

  return (
    <ContentContext.Provider value={INITIAL_DATA}>
      {children}
    </ContentContext.Provider>
  );
};
