
import './App.css';
// import Cakecontainer from './Cakecontainer';
 import {Provider} from 'react-redux'
 import store from './Redux/store';
import Usercontainer from './User/Usercontainer';
function App() {
  return (
    <>
  <Provider store ={store}>
 <Usercontainer/>
    </Provider>
    </>

   
  );
}

export default App;
