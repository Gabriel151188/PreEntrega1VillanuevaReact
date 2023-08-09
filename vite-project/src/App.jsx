import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidjet";
// import casa from "./assets/img/casa.png";


function App () {
  return (
    
    <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
      
      {/* <img src={casa} style={{ width: '10%', height: 'auto' }}/> */}

     
      <NavBar />     
    
    
      <ItemListContainer greeting="Bienvenidos a Mendoza" />
   
    </div>
  );
};

export default App;