import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import Home from './components/Home'
import Create from './components/Create'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Update from './components/update';


function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavbarComponent />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/create" element={<Create />}></Route>
            <Route path='/edit/:id' element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
