const SearchForm = () => {
     
    return (
        <>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Buscar un producto..." aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
        </>
    )
}

export default SearchForm;
