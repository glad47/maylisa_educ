import Cookies from "js-cookie";



 const getToken = (TokenKey) => {
    return Cookies.get(TokenKey);
};

 const setToken = (TokenKey, TokenValue) => {
    return Cookies.set(TokenKey, TokenValue);
};

 const removeToken = (TokenKey) => {
    return Cookies.remove(TokenKey);
};

export{
    getToken,
    setToken,
    removeToken

}