import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './component/Navigation';
import About from './veiw/About';
import Board from './veiw/Board';
import Login from './veiw/Login';
import Main from './veiw/Main';
import MyPage from './veiw/MyPage';
import BoardDetailEdit from './veiw/BoardDetailEdit';
import SignUp from './veiw/SignUp';
import KakaoSignUp from './veiw/KakaoSignUp';
import BoardDetail from './veiw/BoardDetail';
import UserInfoUpdate from './veiw/UserInfoUpdate';
import { integerPropType } from '@mui/utils';
import Profile from './veiw/Profile';
import Auth from './Auth'






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<Main />} />
        <Route path="/login" exact={true} element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/kakaoSignup" element={<KakaoSignUp />} />
        <Route path="/oauth/kakao/callback" element={<Auth />} />
        <Route path="/board" exact={true} element={<Board />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/board/detail" exact={true} element={<BoardDetail />} />
        <Route path="/board/detail/Edit" element={<BoardDetailEdit />} />
        <Route path="/userinfo" element={<UserInfoUpdate />} />
      </Routes>
    </BrowserRouter>

  );
}




export default App;
