// return the token from the session storage
export const getToken = () => {
    return sessionStorage.getItem('token') || "";
}
  
// remove token from session storage
export const removeUserSession = () => {
    sessionStorage.removeItem('token');
}
  
// set token from session storage
export const setUserSession = (token) => {
    sessionStorage.setItem('token', token);
}