import React, { createContext, useState } from "react";

type CtxObj = {
  navbar: string[];
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  content: {}[];
  setContent: React.Dispatch<React.SetStateAction<never[]>>;
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
};

export const ContentContext: CtxObj = createContext({
  navbar: [],
  isLoading: false,
  setLoading: undefined,
  content: [],
  setContent: undefined,
  active: "",
  setActive: undefined,
});

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [active, setActive] = useState("Posts");

  const INITIAL_DATA: CtxObj = {
    navbar: ["Posts", "Users"],
    isLoading,
    setLoading,
    content,
    setContent,
    active,
    setActive,
  };

  return (
    <ContentContext.Provider value={INITIAL_DATA}>
      {children}
    </ContentContext.Provider>
  );
};
