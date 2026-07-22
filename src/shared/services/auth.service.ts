import {
cookieService
} from "./cookie.service";


const TOKEN_KEY="accessToken";


export const authService={


getToken(){

return cookieService.get(
TOKEN_KEY
);

},



setToken(
token:string
){

cookieService.set(
TOKEN_KEY,
token
);

},



removeToken(){

cookieService.remove(
TOKEN_KEY
);

},



isAuthenticated(){

return Boolean(
this.getToken()
);

}

};