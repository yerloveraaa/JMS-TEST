import { ORDER_STATUS } from "./consts";

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

  export const geofirexToLocation = (location) => {
    let geopoint = location?.geopoint;
    
    if(geopoint?.latitude && geopoint?.longitude){
      return {
        latitude: geopoint.latitude,
        longitude: geopoint.longitude
      };
    }
  
    geopoint = location?.geopoint?.toJSON?.();
    if(geopoint?.latitude && geopoint?.longitude){
        return geopoint
    } 
    return null;
  };


  export const geofirexToJSON = (location) => {
    let geopoint = location?.geopoint;
    
    if(geopoint?.latitude && geopoint?.longitude){
      return {
        latitude: geopoint.latitude,
        longitude: geopoint.longitude
      };
    }
    geopoint = location?.geopoint?.toJSON?.();
    if(geopoint?.latitude && geopoint?.longitude){
        return geopoint
    } 
    return null;
  };



  
