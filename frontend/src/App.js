
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Loginpage from './Pages/Loginpage/LoginPage';
import Homepage from './Pages/Home/HomePage';
import SignIn from './Pages/SigninPage/SignIn';
import SecureRoute from './Pages/SecureRoute/SecureRoute';
import IsLoading from './Pages/IsLoadingPage/IsLoading';
import Feed from './Pages/Feed/Feed';
import Explore from './Pages/Explore/Explore';
import Notifications from './Pages/Notifications/Notification';
import Messages from './Pages/messages/Messages';
import Bookmarks from './Pages/Bookmark/Bookmarks';
import Profile from './Pages/Profile/Profile';
import More from './Pages/More/More';

function App() {
  return (
    <div className="App">
<>
      <Routes>
      <Route path='/' element= {<SecureRoute>{<Homepage/>}</SecureRoute>} >
      <Route index element={<Feed/>}></Route>
      </Route>
      <Route  path='/home' element= {<SecureRoute>{<Homepage/>}</SecureRoute>}>
      <Route path='feed' element={<Feed/>}/>
      <Route path='explore' element={<Explore/>}/>
      <Route path='notifications' element={<Notifications/>}/>
      <Route path='messages' element={<Messages/>}/>
      <Route path='Bookmarks' element={<Bookmarks/>}/>
      <Route path='profile' element={<Profile/>}/>
      <Route path='more' element={<More/>}/>
      </Route>
      <Route path='login' element= {<Loginpage/>}></Route>
      <Route path='signup' element ={<SignIn/>}></Route>
      <Route path='loading' element = {<IsLoading/>}></Route>
      </Routes>
</>
    </div>
  );
}

export default App;
