import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom'; 


const LinkListContainer = () => {
    // const { categoryId } = useParams();
     
    return (
        <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/productos">Todos los productos</Link>
            </li>
            <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/productos/remeras">Remeras</Link></li>
                    <li><Link className="dropdown-item" to="/productos/pantalones">Pantalones</Link></li>
                    <li><Link className="dropdown-item" to="/productos/sueters-y-buzos">Sueters y buzos</Link></li>
                    <li><Link className="dropdown-item" to="/productos/pijamas">Pijamas</Link></li>
                    <li><Link className="dropdown-item" to="/productos/accesorios">Accesorios</Link></li>
                </ul>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/">Quiero algo que no encontré</Link>
            </li>
        </ul>
        </>
    )
}

export default LinkListContainer;