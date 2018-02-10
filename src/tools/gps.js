import { Constants, Location, Permissions } from 'expo';

var gps = () => {}


gps.prototype.getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      return { error: 'Permission to access location was denied' }
    }

    let location = await Location.getCurrentPositionAsync({});
    return location
    }
    
export default new gps