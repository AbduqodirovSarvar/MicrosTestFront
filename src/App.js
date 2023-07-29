
import './App.css';
import { UseToken } from './hook/LoginHook';
import { Public } from './Public';
import {Private} from './Private'
import MainPage from './components/MainPage';
import Login from './components/Login';


function App() {
  const {adToken} = UseToken()
  console.log(adToken);



  if (adToken) {
    return <MainPage/>
  } 
   return <Login/>
  
}

export default App;
