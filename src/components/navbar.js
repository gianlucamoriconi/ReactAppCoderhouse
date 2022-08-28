import imageLogo from './alflogo.png';
import CartWidget from './cartwidget';
import LinkListContainer from './linklistcontainer';
import SearchForm from './searchform';
const noneLink = "#"; //Esto es provisorio para la entrega del dia 22/08


const Navbar = () => {
    return (
        <>
        <div className="navbar navbar-dark bg-dark w-100 flex-nowrap pe-3 pt-0 pb-0">
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
                    <div className="container-fluid">
                        <a className="navbar-brand" href={noneLink}>
                            <div><img className="logo-img" src={imageLogo} alt="logo" />
                            </div>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <LinkListContainer />
                            <SearchForm />
                        </div>
                    </div>  
            </nav>
            <CartWidget />
        </div>
        </>
    )
}

export default Navbar;