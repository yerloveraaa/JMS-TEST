
export const AppConfig = {
  nearbyrestaurantsInKilometerRadius: 5,
  geoLocationField: "location",
  distanceFilter: 5000,
  isMultiVendorEnabled: true,
  isSMSAuthEnabled: true,
  appIdentifier: "rn-restaurant-android",
  isDelayedLoginEnabled: false,
  tables: {
    VENDOR: "restaurants",
    VENDOR_ORDERS: "restaurant_orders",
    VENDOR_DELIVERIES: "restaurant_deliveries",
    VENDOR_REVIEWS: "vendor_reviews",
    VENDOR_PRODUCTS: "restaurant_products",
    RESERVATIONS: "reservations",
    ONLINE_DRIVERS: "online_drivers",
    VENDOR_CATEGORIES: "vendor_categories",
    USERS: "users",
    TELEMETRY: "telemetry",
    PAYMENT_METHODS: "payment_methods",
  },
  ORDER_STATUS: {
    placed: "Placed",
    driverPending: "Driver Pending",
    driverAccepted: "Driver Accepted",
    shipped: "Shipped",
    inTransit: "In Transit",
    restaurantAccepted: "Restaurant Accepted",
    selfCancelled: "Self Cancelled",
    customerCancelled: "Customer Cancelled",
    restaurantCancelled: "Restaurant Cancelled",
    driverRejected: "Driver Rejected",
    restaurantRejected: "Restaurant Rejected",
    completed: "Completed",
    noDriverFound: "No Driver Found",
    readyforPickup: "Ready for Pickup",
  },
  USER_ROLES: {
    admin: "admin",
    vendor: "vendor",
    customer: "customer",
    driver: "driver",
  },
  CUSTOMER_DELIVERY_OPTIONS: {
    delivery: "delivery",
    pickup: "pickup",
  },
  RESTAURANT_DELIVERY_METHODS: {
    customerPickup: "Customer Pickup",
    restaurantOwnStaff: "Restaurant Own Staff",
    marketPlace: "Marketplace",
    flexible: "Flexible",
  },
  DRIVER_STATUS: {
    arrived: "Arrived",
    waitingForOrder: "Waiting for Order",
  },
  ORDER_ACTIONS: {
    print: "print",
    call: "call",
  },
  RESTAURANT_DELIVERY_SERVICES: {
    pickupOnly: "pickupOnly",
    deliveryOnly: "deliveryOnly",
    flexible: "flexible",
  },

};

export const ORDER_STATUS_CANCELLED = (status) =>
  [
    AppConfig.ORDER_STATUS.selfCancelled,
    AppConfig.ORDER_STATUS.customerCancelled,
    AppConfig.ORDER_STATUS.restaurantCancelled,
    AppConfig.ORDER_STATUS.restaurantRejected,
    AppConfig.ORDER_STATUS.noDriverFound,
  ].includes(status);

export const ORDER_STATUS_PREPARING = (status) =>
  [
    AppConfig.ORDER_STATUS.driverPending,
    AppConfig.ORDER_STATUS.driverAccepted,
    AppConfig.ORDER_STATUS.driverRejected,
    AppConfig.ORDER_STATUS.restaurantAccepted,
  ].includes(status);

export const UI_CUSTOMER_DELIVERY_OPTIONS = {
  ...AppConfig.CUSTOMER_DELIVERY_OPTIONS,
  flexible: "flexible",
};

export const UI_CUSTOMER_DELIVERY_OPTION_LABELS = {
  [UI_CUSTOMER_DELIVERY_OPTIONS.pickup]: "Pickup Only - 15kms",
  [UI_CUSTOMER_DELIVERY_OPTIONS.flexible]: "Delivery & Pickup - 5kms",
};

export const DELIVERY_LABELS = {
  [AppConfig.RESTAURANT_DELIVERY_SERVICES.pickupOnly]: "Pickup only",
  [AppConfig.RESTAURANT_DELIVERY_SERVICES.deliveryOnly]: "Delivery only",
  [AppConfig.RESTAURANT_DELIVERY_SERVICES.flexible]: "Delivery and Pickup",
  [AppConfig.CUSTOMER_DELIVERY_OPTIONS.pickup]: "Pickup",
  [AppConfig.CUSTOMER_DELIVERY_OPTIONS.delivery]: "Delivery",
};


