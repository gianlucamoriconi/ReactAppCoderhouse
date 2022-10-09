import { createContext, useState, useEffect } from "react";

export const OrderContext = createContext();

const orderValues = {
    email: null,
    consumer: {
        consumerName: null,
        consumerLastname: null,
        consumerPersonalId: null,
        addressStreet: null,
        addressNumber: null,
        addressDpto: null,
        postalCode: null
    },

    billing: {
        billingName: null,
        billingBusinessName: null,
        billingLastname: null,
        billingAddressStreet: null,
        billingAddressNumber: null,
        billingAddressDpto: null,
        billingPostalCode: null,
        billingPersonalId: null
    },
    
    shippingMethod: null,   

    cart: {},
    total: null
}

const initOrder = JSON.parse(localStorage.getItem('order')) || orderValues;


export const OrderProvider = ({children}) => {

    const [order, setOrder] = useState(initOrder);

    const changeValue = (order) => {
        setOrder(order);
    }


    useEffect( () => {
        localStorage.setItem('order', JSON.stringify(order));
      }, [order]);


    return (
        <OrderContext.Provider value={{
            order,
            changeValue
        }}>
          {children}
        </OrderContext.Provider>
    )
}
