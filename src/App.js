import {  useContext } from 'react';
import './App.css';
// material ui

import { LoginContext } from './LoginContext';
import ProtectedRoute from './ProtectedRoute';
import {  Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminPanel from './components/AdminPanel';



function App() {

    

   const { login, loginStatus } = useContext(LoginContext);
   

  return (

    <div className="App">
        <Switch>
            <Route path="/" exact>
                <LoginForm />
            </Route>
            <ProtectedRoute path="/panel" component={AdminPanel} isAuth={loginStatus} />
            
        </Switch>
          
         
    </div>


  );
}


export default App;
