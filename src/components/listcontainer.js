const noneLink = "#"; //Esto es provisorio para la entrega del dia 22/08

const ItemListContainer = () => {
     
    return (
        <>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href={noneLink}>Inicio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href={noneLink}>Todos los productos</a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={noneLink} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Accesorios
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href={noneLink}>Tazas</a></li>
                    <li><a className="dropdown-item" href={noneLink}>Mates</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href={noneLink}>Quiero algo que no encontré</a></li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href={noneLink} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Indumentaria
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href={noneLink}>Remeras</a></li>
                    <li><a className="dropdown-item" href={noneLink}>Buzos</a></li>
                    <li><a className="dropdown-item" href={noneLink}>Pantalones</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href={noneLink}>Quiero algo que no encontré</a></li>
                </ul>
            </li>
        </ul>
        </>
    )
}

export default ItemListContainer;