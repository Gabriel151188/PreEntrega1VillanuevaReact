import CartWidget from "../CartWidget/CartWidjet";




const NavBar = () =>{
  return(
      <nav className="navbar navbar-expand-lg ">
         <div className="container-fluid">
          {/* {Brand} */}
          <h1>Casa Villana</h1>
          
          
       

          {/* {Links} */}
          <ul className="navbar-nav ">
              <li className="nav-item">
                  <a href="#" className="nav-link active apa">Sin Alcohol</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link active">Aperitivos</a>
              </li>
              <li className="nav-item">
                  <a href="#" className="nav-link active">Vinoteca</a>
              </li>
          </ul>

          {/* {CartWidget} */}
          <CartWidget />
          </div>
      </nav>
  );
};

export default NavBar