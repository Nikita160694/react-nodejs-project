import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import SignUp from './component/SignUp';
import Footer from './component/Footer';
import PrivateComponent from './component/PrivateComponent';
import Login from './component/Login';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<ProductList/>}></Route>
          <Route path='/add' element={<AddProduct/>}></Route>
          <Route path='/update/:id' element={<UpdateProduct/>}></Route>
          <Route path='/profile' element={<h1>Profile</h1>}></Route>
          <Route path='/logout' element={<h1>Logout</h1>}></Route>
          </Route>
          
          <Route path='/signup' element={<SignUp />}></Route>
          <Route path='/login' element={<Login />}></Route>
          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
