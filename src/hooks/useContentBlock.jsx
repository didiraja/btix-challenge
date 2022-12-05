import { useEffect, useContext } from 'react'
import { ContentContext } from '../context.jsx';
import Request from "../classes/Request.js";

export default function useContentBlock() {

  // tip: you are importing from Context, NOT USESTATE, so import with {}
  const { active, setLoading, setContent } = useContext(ContentContext);

  useEffect(() => {

    setLoading(true)

    if (active === 'Posts') {
      const getPosts = async () => {
        const result = await Request.GetPosts();

        return setContent(() => result.data.slice(0, 7))
      };

      getPosts();
    }

    if (active === 'Users') {
      const getUsers = async () => {
        const result = await Request.GetUsers();

        return setContent(() => result.data.slice(0, 7))
      };

      getUsers();
    }

    setLoading(false)

  }, [active]);
}