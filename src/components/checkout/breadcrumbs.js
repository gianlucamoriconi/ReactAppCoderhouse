
import { NavLink, Link } from 'react-router-dom';


const Breadcrumbs = () =>{
    return(
        <div className="ps-3 pe-3 pt-4 pb-4 ps-md-5 pe-md-5 pt-md-4 pb-md-4 w-100">
            <NavLink to="/checkout/datos" className="d-inline p-0 breadcrumb breadcrumb-checkout" activeclassname="active">Datos</NavLink>
            <span className="ms-2 me-2 breadcrumb-checkout">/</span>
            <NavLink to="/checkout/entrega" className="d-inline p-0 breadcrumb breadcrumb-checkout" activeclassname="active">Entrega</NavLink>
            <span className="ms-2 me-2 breadcrumb-checkout">/</span>
            <NavLink to="/checkout/pago" className="d-inline p-0 breadcrum breadcrumb-checkout" activeclassname="active">Pago</NavLink>
        </div>
    )
}

export default Breadcrumbs;
