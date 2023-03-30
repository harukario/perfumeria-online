import CartWidget from './CartWidget'
import { useState } from 'react'
import { Link} from "react-router-dom";

const Navbar = () => {
  const [display, setDisplay] = useState(false)
 

  const show = () =>{
    
    if (display==false){
      setDisplay(true)
    }
    else setDisplay(false);
  
  } 


  const Categorias =()=>{
    return(
      <div id="categorias" className="search-results">
        <Link to={`/category/${"femenina"}`}> <button> Fragancias femeninas </button> </Link>
        <Link to={`/category/${"masculina"}`}> <button> Fragancias masculinas </button> </Link>
      </div>
    )}

  return (
    
    <div className='containerProvisorio'> 
    <Link className="link" to={``}> 
      <div className='tituloLogo'>
      <img src="logo.svg" alt="miLogo"/>
      <h1>Perfumeria </h1>
      </div>
    </Link>
      
     <ul className='ulProvisorio'>
         <Link to={``}> <button> Inicio </button> </Link> 
        
        <Link to={`/catalogue`}> <button> Productos </button></Link>
        
        <input type="submit" value="Categorias" onClick={show} />
        { display ? Categorias() : null } 
        

    </ul>
     <CartWidget/> 
    </div>
    
  )
}

export default Navbar
