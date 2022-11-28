import { useEffect, useContext } from 'react';
import { ContentContext } from '../context.jsx';

function Navbar({ sections }) {

  const { active, setActive } = useContext(ContentContext);

  return (
    <div className="button-wrapper text-xl">
      {
        sections.map((label) => {
          return (
            <button key={label} className={label === active ? 'border-2 border-indigo-600' : null}
              onClick={() => setActive(() => label)}>
              {label}
            </button>
          )
        })
      }
    </div>
  )
}

export default Navbar