import { useContext } from "react";
import { ContentContext } from "../context";

function Navbar({ sections }: Record<"sections", string[]>) {
  const { active, setActive } = useContext(ContentContext);

  return (
    <div className="button-wrapper text-xl">
      {sections.map((label) => {
        return (
          <button
            key={label}
            className={`bg-[#2253ad] ${label === active ? "active" : null}`}
            onClick={() => setActive(() => label)}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default Navbar;
