import './App.css'
import logo from '../public/placeholder_logo.png'
import paintingNails from '../public/placeholder_painting_nails.png'
import furniture from '../public/placeholder_furniture.png'
import salon from '../public/placeholder_salon.png'

function App() {
  return (
    <>

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

    <div className="salon-intro">
      <h1>Feel Like A Superstar!</h1>
      <hr />
      <p>Our quality will make you feel like a superstar</p>
    </div>
      
    <div class="gallery-container">
        
      <a className="gallery-image" href="/about">
        <img src={salon} alt="Inside Hollywood Nails" />
      </a>

      <a className="gallery-image" href="/services">
        <img src={paintingNails} alt="Nail tech painting nails" />
      </a>

      <a className="gallery-image" href="/contact">
        <img src={furniture} alt="Hollywood Nails Furniture" />
      </a>

    </div>


    </>
  )
}

export default App
