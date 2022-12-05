import { useContext } from 'react'
import { ContentContext } from './context.jsx';
import useContentBlock from "./hooks/useContentBlock.jsx";
import Navbar from "./components/Navbar.jsx";
import Content from "./components/Content.jsx";
import './App.pcss'

function App() {

  // tip: you are importing from Context, NOT USESTATE, so import with {}
  const { navbar } = useContext(ContentContext);

  useContentBlock();

  return (
    <div className="App mx-auto w-full md:max-w-[800px]">

      <div className="header mb-8 text-center">
        <p className="text-5xl font-bold mb-5">Btix App</p>

        <Navbar sections={navbar} />
      </div>

      <Content />
    </div>
  )
}

export default App
