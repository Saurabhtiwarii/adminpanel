import React, { useState, useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { LoginContext } from '../LoginContext';
import { Redirect } from 'react-router-dom';
import './LoginForm.css'


const useStyles = makeStyles((theme) => ({

  root: {
    '&': {
      
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width:'24rem'      
    },
    '&>*': {
      margin: theme.spacing(2, 0) ,
       width: '100%',
       fontSize: "2rem"
    },
   '&>Button':{
      width: '100%',
      fontWeight: '500'
   },
   
  },
}));

function LoginForm(props) {
       const { login, loginStatus } = useContext(LoginContext);
       
    const [email, setEmail] = useState('saurabh@gmail.com');
    const [password, setPassword] = useState('saurabh');
     const classes = useStyles();
     
    return (
           
        
       
     <div className="login-form-wrapper">
        <div className="login-form">
         {
            loginStatus && <Redirect to={ { pathname: '/panel', state: { from: props.location } }}/>
        }
         <h1 className="login-title">Admin Panel Login</h1>
         <form className={classes.root}>
            <TextField  value={email}  onChange={e=> setEmail(e.target.value)}  autoComplete="off"  type="email" label="Email" required> </TextField>
             <TextField value={password} onChange={e=> setPassword(e.target.value)} autoComplete="off"  type="password" label="Password" required></TextField>
             <Button variant="contained" color="primary" noValidate onClick={()=>login(email,password)} >
              Login
             </Button>
         </form>
        {loginStatus && <h1>Hurray</h1>}
       
      </div>
     </div>

    

    )
}

export default LoginForm
