import { BsCart2 } from 'react-icons/bs';

const CartWidget = () => {
    return (
        <>
        <div id="cart">
            <a className="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
            <BsCart2 />
            </a>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fw-bold" id="offcanvasExampleLabel">Carrito</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        Aquí estarán los productos que llevas comprando
                    </div>
                </div>
            </div>
        </div>
        </>        
    )
}

export default CartWidget;