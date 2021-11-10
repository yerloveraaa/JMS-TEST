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

export const RESTAURANT_FLEXIBLE_DELIVERY_SERVICE = {
  delivery: "delivery",
  pickup: "pickup",
};

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
// Driver
export const RESTAURANT_DELIVERY_SERVICE_AVAILABILITY = {
  ...RESTAURANT_DELIVERY_SERVICES,
  ...RESTAURANT_FLEXIBLE_DELIVERY_SERVICE,
};

export const DELIVERY_METHODS_PARTNERSHIP = [
  RESTAURANT_DELIVERY_METHODS.restaurantOwnStaff,
  RESTAURANT_DELIVERY_METHODS.marketPlace,
  RESTAURANT_DELIVERY_METHODS.flexible,
];

export const PICKUP_METHODS_PARTNERSHIP = [
  RESTAURANT_DELIVERY_METHODS.customerPickup,
];

export const RESTAURANT_DELIVERY_SERVICES_METHODS_MAP = {
  [RESTAURANT_DELIVERY_SERVICES.pickupOnly]: PICKUP_METHODS_PARTNERSHIP,
  [RESTAURANT_DELIVERY_SERVICES.deliveryOnly]: DELIVERY_METHODS_PARTNERSHIP,
  [RESTAURANT_DELIVERY_SERVICES.flexible]: DELIVERY_METHODS_PARTNERSHIP,
};

export const RESTAURANT_CUSTOMER_DELIVERY_MAP = {
  [RESTAURANT_DELIVERY_SERVICE_AVAILABILITY.pickupOnly]: CUSTOMER_DELIVERY_OPTIONS.pickup,
  [RESTAURANT_DELIVERY_SERVICE_AVAILABILITY.pickup]: CUSTOMER_DELIVERY_OPTIONS.pickup,
  [RESTAURANT_DELIVERY_SERVICE_AVAILABILITY.deliveryOnly]: CUSTOMER_DELIVERY_OPTIONS.delivery,
  [RESTAURANT_DELIVERY_SERVICE_AVAILABILITY.delivery]: CUSTOMER_DELIVERY_OPTIONS.delivery,
  [RESTAURANT_DELIVERY_SERVICE_AVAILABILITY.flexible]: CUSTOMER_DELIVERY_OPTIONS.delivery
};