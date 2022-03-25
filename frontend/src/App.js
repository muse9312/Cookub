import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import About from './veiw/About';
import Board from './veiw/Board';
import Login from './veiw/Login';
import Main from './veiw/Main';
import MyPage from './veiw/MyPage';
import SignUp from './veiw/SignUp';
import KakaoSignUp from './veiw/KakaoSignUp';
import BoardDetail from './veiw/BoardDetail';
import UserInfoUpdate from './veiw/UserInfoUpdate';
import { integerPropType } from '@mui/utils';
// import Auth from './Auth.js';






function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/kakaoSignup" element={<KakaoSignUp />} />
        {/* <Route path="/oauth/kakao/callback" element={<Auth />} /> */}
        <Route path="/board" exact={true} element={<Board />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/board/detail" exact={true} element={<BoardDetail />} />
        <Route path="/userinfo" element={<UserInfoUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}




export default App;
