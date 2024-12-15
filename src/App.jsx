  import { Networks, Sidebar } from "./components"
  import './App.css'

  function App({ children } = props) {
    return (
      <div className='page'>
        <div className='container'>
          {children}
          <Sidebar />
        </div>
        <Networks />
      </div>
    )
  }

  export default App