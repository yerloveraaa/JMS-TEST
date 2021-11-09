import { ORDER_STATUS, CUSTOMER_DELIVERY_OPTIONS, RESTAURANT_DELIVERY_SERVICES } from "./consts";

export const ORDER_STATUS_CANCELLED = (status) =>
  [
    ORDER_STATUS.selfCancelled,
    ORDER_STATUS.customerCancelled,
    ORDER_STATUS.restaurantCancelled,
    ORDER_STATUS.restaurantRejected,
    ORDER_STATUS.noDriverFound,
  ].includes(status);

export const ORDER_STATUS_PREPARING = (status) =>
  [
    ORDER_STATUS.driverPending,
    ORDER_STATUS.driverAccepted,
    ORDER_STATUS.driverRejected,
    ORDER_STATUS.restaurantAccepted,
  ].includes(status);

export const UI_CUSTOMER_DELIVERY_OPTIONS = {
  ...CUSTOMER_DELIVERY_OPTIONS,
  flexible: "flexible",
};

export const UI_CUSTOMER_DELIVERY_OPTION_LABELS = {
  [UI_CUSTOMER_DELIVERY_OPTIONS.pickup]: "Pickup Only - 15kms",
  [UI_CUSTOMER_DELIVERY_OPTIONS.flexible]: "Delivery & Pickup - 5kms",
};


export const DELIVERY_LABELS = {
    [RESTAURANT_DELIVERY_SERVICES.pickupOnly]: "Pickup only",
    [RESTAURANT_DELIVERY_SERVICES.deliveryOnly]: "Delivery only",
    [RESTAURANT_DELIVERY_SERVICES.flexible]: "Delivery and Pickup",
    [CUSTOMER_DELIVERY_OPTIONS.pickup]: "Pickup",
    [CUSTOMER_DELIVERY_OPTIONS.delivery]: "Delivery",
  };
  
  
