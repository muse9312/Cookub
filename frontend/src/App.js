import { BrowserRouter, Routes, Route } from 'react-router-dom';
import style from './App.module.css';
import Navigation from './component/Navigation';
import About from './veiw/About';
import Board from './veiw/Board';
import Login from './veiw/Login';
import Main from './veiw/Main';
import MyPage from './veiw/MyPage';
import SignUp from './veiw/SignUp';
import BoardDetail from './veiw/BoardDetail';




function App() {
  return (
    <BrowserRouter>
      <div className={style.nav}>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/board" exact={true} element={<Board />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/board/detail" exact={true} element={<BoardDetail />} />
      </Routes>
    </BrowserRouter>

  );
}



export default App;
