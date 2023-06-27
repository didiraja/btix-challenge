import { useEffect, useContext } from "react";
import { ContentContext } from "../context";
import Request, { RequestMethod } from "../classes/Request";

export default function useContentBlock() {
  // tip: you are importing from Context, NOT USESTATE, so import with {}
  const { active, setContent, setLoading } = useContext(ContentContext);

  function menuHandler(navbarlabel: string) {
    const method = `Get${navbarlabel}`;

    const getContent = async () => {
      // @ts-ignore
      const result = await Request[method]();

      return setContent(() => result.data.slice(0, 7));
    };

    getContent();
  }

  useEffect(() => {
    setLoading(true);

    menuHandler(active);

    setLoading(false);
  }, [active]);
}
