  import './App.css'
  import { Networks, Sections } from "./components";

  function App({ children } = props) {
    
    return (
      <>
        <div>
          {children}
          <Sections />
        </div>
        <Networks />
      </>
    )
  }

  export default App