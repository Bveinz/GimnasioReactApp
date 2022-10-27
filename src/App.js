import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CompCreateBlog from './components/clients/CreateCli';
import PrivateRoute from './components/router/PrivateRoute';
import PublicRoute from './components/router/PublicRoute';
import {LOGIN, LOGOUT, PRIVATE, CREATE, REGISTRO, PRIVATEHOME, PRIVATECLI} from './config/routes';
import AuthContextProvider from './contexts/authContext';
import HomeLogin from './views/HomeLogin';
import Home from './views/HomeLogin';
import Login from './views/Login';
import Logout from './views/Logout';
import Private from './views/Private';
import PublicHome from './views/Public/PublicHome';
import PrivateHome from './views/Private/PrivateHome';
import PrivateClientes from './components/Private/components/Home/PrivateClientes';
import NavBar from './components/Common/NavBar'


function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
    
    <NavBar/>
      <Routes>
        <Route path={PRIVATE} element={<PrivateRoute/>}>
          <Route index element={<PrivateHome />} />

          <Route path={PRIVATEHOME} element = {<HomeLogin/>}></Route>
          <Route path={LOGOUT} element={<Logout />} />
          <Route path={PRIVATECLI} element={< PrivateClientes/>} />
          <Route path={CREATE} element={<CompCreateBlog />} />
        </Route>

        <Route path="/" element = {<PublicRoute/>}>
        
          <Route index element={<PublicHome />} />
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTRO} element={<CompCreateBlog />} />

        </Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
  );
}

export default App;
