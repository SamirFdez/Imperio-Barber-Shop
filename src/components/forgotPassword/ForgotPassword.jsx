import { useState } from 'react'
import forgotPasswordStyles from './forgotPassword.module.css'
import { Link } from "react-router-dom";
import Logo from '../img/logo.jpeg'
import swal from 'sweetalert';

export const ForgotPasswordForm = () => {

    const [forgotPasswordEmail, setForgotPasswordEmail] = useState(""); 

    const loginValidation = () => {
        if(forgotPasswordEmail === "") {
            swal({
                title: "ERROR",
                text: "Por favor ingresar tu correo electrónico.",
                icon: "info",
              });
        }
    }

    return (
        <>
         <div className={forgotPasswordStyles.LoginBox}>
         <img className={forgotPasswordStyles.LoginBoxLogo} 
         src={Logo} alt="Logo de la barberia"/> 
         <h1 className={forgotPasswordStyles.LoginBoxH1}>Recuperar Contraseña</h1>   

         <form onSubmit={loginValidation}>
         <label className={forgotPasswordStyles.LoginBoxLabel} for="usuario"> Correo electrónico </label>
         <input onChange={(e) => setForgotPasswordEmail(e.target.value)} className={forgotPasswordStyles.LoginBoxInput} type="text" placeholder="Ingrese su correo electrónico"/>

         <input onClick= {() => loginValidation()} className={forgotPasswordStyles.LoginBoxButton} type="button" value="Recuperar contraseña"/>

         <label className={forgotPasswordStyles.LoginBoxLogin} for="forgotpassword">
            Ingresar a mi cuenta
            <Link to='/' style={{marginLeft: "0.1em", textDecoration: "none"}}> click aqui </Link>     
        </label>
         </form>

         </div>
        </>
    )
}