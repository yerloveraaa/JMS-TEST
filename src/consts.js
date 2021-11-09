export const FIRESTORE_TABLES = {
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
};

export const ORDER_STATUS = {
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
};

export const USER_ROLES = {
  admin: "admin",
  vendor: "vendor",
  customer: "customer",
  driver: "driver",
};

export const CUSTOMER_DELIVERY_OPTIONS = {
  delivery: "delivery",
  pickup: "pickup",
};

export const RESTAURANT_DELIVERY_METHODS = {
  customerPickup: "Customer Pickup",
  restaurantOwnStaff: "Restaurant Own Staff",
  marketPlace: "Marketplace",
  flexible: "Flexible",
};

export const DRIVER_STATUS = {
  arrived: "Arrived",
  waitingForOrder: "Waiting for Order",
};

export const ORDER_ACTIONS = {
  print: "print",
  call: "call",
};

export const RESTAURANT_DELIVERY_SERVICES = {
  pickupOnly: "pickupOnly",
  deliveryOnly: "deliveryOnly",
  flexible: "flexible",
};
