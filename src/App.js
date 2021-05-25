import {  useContext } from 'react';
import './App.css';
// material ui

import { LoginContext } from './LoginContext';
import ProtectedRoute from './ProtectedRoute';
import {  Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import AdminPanel from './components/AdminPanel';
import Options from './components/Options';



function App() {

    

   const { loginStatus } = useContext(LoginContext);
   

  return (

    <div className="App">
        <Switch>
            <Route path="/" exact>
                <LoginForm />
            </Route>
            <ProtectedRoute path="/panel" exact component={AdminPanel} isAuth={loginStatus} />
            <Route path='/panel/:option' component={Options} />
        
        </Switch>

         
    </div>


  );
}


export default App;
