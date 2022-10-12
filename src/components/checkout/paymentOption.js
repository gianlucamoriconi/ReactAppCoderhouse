import Form from 'react-bootstrap/Form';

const PaymentOption = ({paymentData, open, handlePaymentActive}) => {

    return (
        <>
             <div className='d-flex flex-wrap w-100 shadow-sm payment-option mb-3'>
                <div className='d-flex w-100'>
                    <Form.Check className="payment-option w-100"
                    type="radio"
                    name="paymentOption-name"
                    id={paymentData.id}
                    label={paymentData.title}
                    />
                    <div className="arrow-icon d-flex mt-auto p-4 m-0 mb-auto">
                        <svg className="accordion-rotate-icon" width="13px" height="13px" viewBox="0 0 1024 1024"><path d="M779.8,562.7L339.5,1003c-28,28-73.4,28-101.4,0c-28-28-28-73.4,0-101.4L627.7,512L238.1,122.4c-28-28-28-73.4,0-101.4 c28-28,73.4-28,101.4,0l440.3,440.3c14,14,21,32.3,21,50.7C800.8,530.3,793.8,548.7,779.8,562.7z"></path></svg>
                    </div>
                </div>
                {open ?
                <div className="payment-content p-4 rounded w-100 d-flex">
                    <p>{paymentData.description}</p>
                </div>
                : null}
            </div>

            {open ? <button className="btn fs-6" onClick={handlePaymentActive} id="allPayments">Ver más medios de pago</button> : null}
        </>
    )
}

export default PaymentOption;
