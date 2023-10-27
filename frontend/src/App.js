
import './App.css';
import Nav from './components/Nav';
import SignUp from './components/SignUp';
import Footer from './components/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateComp from './components/PrivateComp';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav />
     <Routes>
     <Route element={<PrivateComp/>}>
      <Route path='/' element={<h1>Product List </h1>}/>
      <Route path='/add' element={<h1>Add Products </h1>}/>
      <Route path='/update' element={<h1>Products updated </h1>}/>
      <Route path='/logout' element={<h1>Account Logout </h1>}/>
      <Route path='/profile' element={<h1>Account Profile</h1>}/>
      </Route>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/Login' element={<Login/>}/>
     </Routes>
     
     
    
    
    </BrowserRouter>
    <Footer />
          
    </div>
  );
}

export default App;
