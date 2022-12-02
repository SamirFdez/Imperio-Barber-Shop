import { useState } from 'react'
import logintStyles from './loginForm.module.css'
import { Link } from "react-router-dom";
import Logo from '../img/logo.jpeg'
import swal from 'sweetalert';

export const LoginForm = function() {

    const [userLogin, setUserLogin] = useState({
        username: "",
        password: ""
    }); 

    const loginValidation = function(){
        if(userLogin.username === "" || userLogin.password === "") {
            swal({
                title: "ERROR",
                text: "Completa todos los campos para iniciar sesión.",
                icon: "info",
              });
        }
    }

    return (
        <>
         <div className={logintStyles.LoginBox}>
         <img className={logintStyles.LoginBoxLogo} 
         src={Logo} alt="Logo de la barberia"/> 
         <h1 className={logintStyles.LoginBoxH1}>Iniciar Sesión</h1>   

         <form>
         <label className={logintStyles.LoginBoxLabel} for="usuario"> Usuario </label>
         <input onChange={(e) => setUserLogin({...userLogin,username:e.target.value})} className={logintStyles.LoginBoxInput} type="text" placeholder="Ingrese su nombre de usuario"/>

         <label className={logintStyles.LoginBoxLabel} for="password">Contraseña</label>
         <input onChange={(e) => setUserLogin({...userLogin,password:e.target.value})} className={logintStyles.LoginBoxInput} type="password" placeholder="Ingrese su contraseña"/>

         <input onClick= {() => loginValidation()} className={logintStyles.LoginBoxButton} type="button" value="Iniciar sesión"/>

        <label className={logintStyles.LoginBoxForgotPassword} for="forgotpassword">
            ¿Has olvidado tu contraseña?
            <Link to='/forgotPassword' style={{marginLeft: "0.1em", textDecoration: "none"}}> click aqui </Link>     
        </label>
        </form>

        </div>
        </>
    )
}