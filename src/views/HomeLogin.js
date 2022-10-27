import {Link} from 'react-router-dom';
import {LOGIN, PRIVATE} from '../config/routes';
import {useAuthContext} from '../contexts/authContext';
import Navbar from '../components/pages/Navbar';
import MenuDs from '../components/Delivery/MenuDs';
import Table from '../components/Delivery/Table';
import BarraNav from '../components/Delivery/BarraNav';


export default function HomeLogin() {
  const {isAuthenticated} = useAuthContext();

  return (
    <div> 

      <MenuDs></MenuDs>
    
      <BarraNav></BarraNav>
      
      <Table></Table>
    
    </div>
  );
}
