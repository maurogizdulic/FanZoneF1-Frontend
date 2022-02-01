import { removeUserSession } from '../util/common';

const Logout = () => {
    removeUserSession();
    console.log("REMOVED!!!");
    return(window.location.replace("/latest"));
}
export default Logout;