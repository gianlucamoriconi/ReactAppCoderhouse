import Form from 'react-bootstrap/Form';

const BillingForm = (props) =>{

    const {values, handleChange, handleBusiness, handleChangeBillingAddressNumber, business, billingAddressNumberDisabled} = props;


    return (
            <div>
                <h4 className="mb-4">Dirección de facturación</h4>
                <div>

                    <h3 className="mb-4 fs-6">¿Empresa o persona?</h3>
                    <div className="d-flex">
                        <Form.Group required className="mb-3" controlId="businessOrPerson" onChange={handleBusiness}>
                            <Form.Check name="businessOrPerson" id="business" type="radio" defaultChecked inline label="Empresa" />
                            <Form.Check name="businessOrPerson" id="person" type="radio" inline label="Persona" />
                        </Form.Group>
                    </div>


                    {business ?
                    <div className="d-flex">
                        <Form.Group className="mb-3 col-6 pe-3" controlId="billingBusinessName">
                            <Form.Control required name="billingBusinessName" value={values.billingBusinessName} onChange={handleChange} type="text" placeholder="Razón social" />
                        </Form.Group>
                    </div>
                        :
                    <div className="d-flex">
                        <Form.Group className="mb-3 col-6 pe-3" controlId="billingName">
                            <Form.Control required name="billingName" value={values.billingName} onChange={handleChange} type="text" placeholder="Tu nombre" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-6" controlId="billingLastname">
                            <Form.Control required name="billingLastname" value={values.billingLastname} onChange={handleChange} type="text" placeholder="Tu apellido" />
                        </Form.Group>
                    </div>}
                </div>
                <div className="mb-4">
                    <Form.Group className="mb-3 col-12" controlId="billingAddressAddress">
                        <Form.Control name="billingAddressAddress" type="text" required value={values.billingAddressAddress} onChange={handleChange} placeholder="Nombre de la calle" />
                    </Form.Group>
                    <div className="d-flex flex-wrap">
                        <Form.Group className="mb-3 col-4 pe-3" controlId="billingAddressNumber">
                            <Form.Control name="billingAddressNumber" disabled={billingAddressNumberDisabled}  required={billingAddressNumberDisabled ? false : true} value={billingAddressNumberDisabled ? '' : values.billingAddressNumber} onChange={handleChange} type="text" placeholder="Altura" />
                            <Form.Check onChange={handleChangeBillingAddressNumber} className="mt-3" type="checkbox" label="Sin altura" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-4 pe-3" controlId="billingAddressDpto">
                            <Form.Control name="billingAddressDpto" type="text" value={values.billingAddressDpto} onChange={handleChange} placeholder="Departamento (opcional)" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-4" controlId="billingPostalCode">
                            <Form.Control name="billingPostalCode" type="text" value={values.billingPostalCode} onChange={handleChange} placeholder="Código postal" />
                        </Form.Group>
                    </div>
                    <div className="d-flex">
                        <Form.Group className="mb-3 col-12 mt-4" controlId="billingPersonalId">
                            <Form.Control name="billingPersonalId" type="text" required value={values.billingPersonalId} onChange={handleChange} placeholder="DNI, CUIL o CUIT" />
                        </Form.Group>
                    </div>
                </div>
            </div>
    )
}

export default BillingForm;