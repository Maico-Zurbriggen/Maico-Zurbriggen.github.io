  import { Networks, Sections } from "./components";
  import './App.css'

  function App({ children } = props) {
    
    return (
      <div className='page'>
        <div className='container'>
          {children}
          <Sections />
        </div>
        <Networks />
      </div>
    )
  }

  export default App