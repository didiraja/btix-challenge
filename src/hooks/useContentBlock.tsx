import { useEffect, useContext } from "react";
import { ContentContext } from "../context.js";
import Request from "../classes/Request.js";

export default function useContentBlock() {
  // tip: you are importing from Context, NOT USESTATE, so import with {}
  const { active, setContent, setLoading } = useContext(ContentContext);

  function menuHandler(navbarlabel) {
    const method = `Get${navbarlabel}`;

    const getContent = async () => {
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
