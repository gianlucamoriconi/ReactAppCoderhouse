import { useContext } from "react";
import { LoginContext } from "../../context/loginContext";
import Button from 'react-bootstrap/Button';

const AccountPage = () =>{

    const { logout } = useContext(LoginContext);


    return(
        <div className="container p-5">
            <h2>Bienvenido</h2>
            <Button onClick={logout}>Cerrar sesión</Button>
        </div>
    )
    
}

export default AccountPage;