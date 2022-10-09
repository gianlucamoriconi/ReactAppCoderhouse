import Form from 'react-bootstrap/Form';

const ShippingForm = (props) => {

    const { values, handleChange, handleChangeShippingAddressNumber, shippingAddressNumberDisabled, handleBillingRequired } = props;

    return (
        <div className="mb-5">
            <h4 className="mb-4">Datos de envío</h4>
            <div className="d-flex">
                <Form.Group className="mb-3 col-6 pe-3" controlId="name">
                    <Form.Control name="consumerName" required value={values.consumerName} onChange={handleChange} type="text" placeholder="Tu nombre" />
                </Form.Group>

                <Form.Group className="mb-3 col-6" controlId="lastname">
                    <Form.Control name="consumerLastname" required value={values.consumerLastname} onChange={handleChange} type="text" placeholder="Tu apellido" />
                </Form.Group>
            </div>
            <div className="mb-4">
                <Form.Group className="mb-3 col-12" controlId="shippingAddressAddress">
                    <Form.Control name="shippingAddressAddress" required value={values.shippingAddressAddress} onChange={handleChange} type="text" placeholder="Nombre de la calle" />
                </Form.Group>
                <div className="d-flex flex-wrap">
                    <Form.Group className="mb-3 col-4 pe-3" controlId="shippingAddressNumber">
                        <Form.Control name="shippingAddressNumber" disabled={shippingAddressNumberDisabled} required={shippingAddressNumberDisabled ? false : true}  value={shippingAddressNumberDisabled ? '' : values.shippingAddressNumber} onChange={handleChange} type="text" placeholder="Altura" />
                        <Form.Check onChange={handleChangeShippingAddressNumber} className="mt-3" type="checkbox" label="Sin altura" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-4 pe-3" controlId="shippingAddressDpto">
                        <Form.Control name="shippingAddressDpto" type="text" value={values.shippingAddressDpto} onChange={handleChange} placeholder="Departamento (opcional)" />
                    </Form.Group>
                    <Form.Group className="mb-3 col-4" controlId="shippingPostalCode">
                        <Form.Control name="shippingPostalCode" type="text" value={values.shippingPostalCode} onChange={handleChange} placeholder="Código postal" />
                    </Form.Group>
                </div>
                <div className="d-flex">
                    <Form.Group className="mb-3 col-12 mt-4" controlId="consumerPersonalId">
                        <Form.Control name="consumerPersonalId" type="text" required value={values.consumerPersonalId} onChange={handleChange} placeholder="DNI, CUIL o CUIT" />
                    </Form.Group>
                </div>
            </div>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check id="billingInfoSame" type="checkbox" defaultChecked onChange={handleBillingRequired} label="Mis datos de facturación serán los mismos que los de envío." />
            </Form.Group>
        </div>
    )
}

export default ShippingForm;