// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { dataCategories } from '../helpers/categories.js';

const LinkListContainer = () => {
     
    return (
        <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item p-2">
                <NavLink className="nav-link p-2" activeclassname="active" aria-current="page" to="/">Inicio</NavLink>
            </li>
            <li className="nav-item p-2">
                <NavLink className="nav-link p-2" activeclassname="active" to="/todos-los-productos">Todos los productos</NavLink>
            </li>
            <li className="nav-item dropdown p-2">
                <span className="nav-link dropdown-toggle p-2" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Categorías
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown p-2">
                    {dataCategories.map((category) => {
                        return <li key={category.categoryId}><NavLink className="dropdown-item nav-link p-2" activeclassname="active" to={"/categoria/" + category.slug}  >{category.categoryName}</NavLink></li>
                    })}
                </ul>
            </li>
        </ul>
        </>
    )
}

export default LinkListContainer;
