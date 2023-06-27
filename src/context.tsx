import React, { ReactNode, Dispatch, SetStateAction, createContext, useState } from "react";

type IContext = {
  navbar: string[];
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  content: any[];
  setContent: Dispatch<SetStateAction<never[]>>;
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export const ContentContext = createContext<IContext>({
  navbar: [],
  isLoading: false,
  setLoading: () => { },
  content: [],
  setContent: () => { },
  active: '',
  setActive: () => { },
});

export const ContentProvider = ({ children }: { children: ReactNode }) => {

  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState([]);
  const [active, setActive] = useState("Posts");

  const INITIAL_DATA = {
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
