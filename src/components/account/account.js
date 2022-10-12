import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState, useContext } from 'react';
import { LoginContext } from '../../context/loginContext';
import AccountPage from "./accountPage";



const Account = () =>{

    const { login, user } = useContext(LoginContext);
    console.log(user);
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');


    const handlePassChange = (e) => {
        setPass(e.target.value)
    }


    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        login({
            email, pass
        })
    };


    return (
        <div className='d-flex flex-wrap'>
            <div className='col-3'>

            </div>
            {user.logged ?
            <AccountPage/>
            :
            <Form onSubmit={handleSubmit} className='container p-4 col-9'>
                <div className='mb-4'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={email} onChange={handleEmailChange} required placeholder="Email" />

                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" name="password" value={pass} onChange={handlePassChange} required placeholder="Contraseña" />
                </div>

                    <Button type="submit" className="btn btn-primary w-100">Iniciar sesión</Button>
            </Form>
            }
        </div>

    )                     
}

export default Account;