import react from 'react';
import { Link } from 'react-router-dom';
import About from '../veiw/About';
import Board from '../veiw/Board';
import Login from '../veiw/Login';
import MyPage from '../veiw/MyPage';
import logo from '../assets/img/CookubLogo.png'
import './Navigation.css';



function Navigation() {
  return ( 
    <div className='nav'>
      <img className='logo_img' src={logo} alt="COOKUB" title="Cookub"/> 
      <Link to='/login' element={<Login/>}>LOGIN</Link>
      <Link to='/about' element={<About/>}>ABOUT</Link>
      <Link to='/board' element={<Board/>}>PUBLIC RECIPE</Link>
      <Link to='/mypage' element={<MyPage/>}>REPOSITORY</Link>
    </div>
   );
}

export default Navigation;