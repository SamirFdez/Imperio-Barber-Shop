import { useState } from 'react'
import forgotPasswordStyles from './forgotPassword.module.css'
import Logo from '../img/logo.jpeg'
import swal from 'sweetalert';

export const ForgotPasswordForm = function() {

    const [emailData, setEmailData] = useState(""); 

    const loginValidation = function(){
        if(emailData.username === "") {
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
         <h1 className={forgotPasswordStyles.LoginBoxH1}>Iniciar Sesión</h1>   

         <form>
         <label className={forgotPasswordStyles.LoginBoxLabel} for="usuario"> Usuario </label>
         <input onChange={(e) => setEmailData(e.target.value)} className={forgotPasswordStyles.LoginBoxInput} type="text" placeholder="Ingrese su nombre de usuario"/>

         <input onClick= {() => loginValidation()} className={forgotPasswordStyles.LoginBoxButton} type={"button"} value="Iniciar sesión"/>

         <label className={forgotPasswordStyles.LoginBoxForgotPassword} for="forgotpassword">¿Has olvidado tu contraseña?</label>
         </form>

         </div>
        </>
    )
}