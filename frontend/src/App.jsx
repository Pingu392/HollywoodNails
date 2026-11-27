import './App.css'
import logo from '../public/placeholder_logo.png'

function App() {
  return (

    <nav className="navbar">
      
      <div className="nav-wrapper">
        
        <div className="navbar">
          <a className="navbar-logo" href="/">
            <img width={50} src={logo} alt="Hollywood Nails"/>
          </a>
          <a href="/contact">Contact</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/">Home</a>
        </div>
      </div>
    </nav>
  )
}

export default App
