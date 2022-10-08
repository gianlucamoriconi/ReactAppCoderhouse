import { createContext, useState } from "react";

export const OrderContext = createContext();

const orderValues = {
  email: 'default',
  consumerName: 'default',
  consumerLastname: 'default',
  shippingAddressAddress: 'default',
  shippingAddressNumber: 'default',
  shippingAddressDpto: 'default',
  shippingPostalCode: 'default',
  shippingMethod: 'default',
  consumerPersonalId: 'default',
  billingName: 'default',
  billingBusinessName: 'default',
  billingLastname: 'default',
  billingAddressAddress: 'default',
  billingAddressNumber: 'default',
  billingAddressDpto: 'default',
  billingPersonalId: 'default',
  shippingOptionName: 'default',
  shippingOptionCost: 'default'
};

const initOrder = JSON.parse(localStorage.getItem('order')) || orderValues;


export const OrderProvider = ({children}) => {

    const [order, setOrder] = useState(initOrder);
    const changeValue = (order) => {
        // order.property = valueProperty;
        localStorage.setItem('order', JSON.stringify(order));
      }


    return (
        <OrderContext.Provider value={{
            order,
            changeValue
        }}>
          {children}
        </OrderContext.Provider>
    )
}
