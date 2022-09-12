import { Link } from 'react-router-dom';
import { dataCategories } from '../helpers/categories.js';


const LinkListContainer = () => {
     
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
                    {dataCategories.map((category) => {
                        return <li key={category.categoryId}><Link className="dropdown-item" to={"/productos/" + category.slug}  >{category.categoryName}</Link></li>
                    })}
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
