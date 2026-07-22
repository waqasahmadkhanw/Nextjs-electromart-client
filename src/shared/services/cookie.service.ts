export const cookieService = {


get(name:string):string | null {

if(typeof document==="undefined")
return null;


const cookies =
document.cookie.split(";");


const cookie =
cookies.find(
item =>
item.trim()
.startsWith(`${name}=`)
);


return cookie
? cookie.split("=")[1]
: null;

},



set(
name:string,
value:string,
days=7
){

if(typeof document==="undefined")
return;


const expires =
new Date(
Date.now() +
days*86400000
)
.toUTCString();


document.cookie =
`${name}=${value}; expires=${expires}; path=/`;

},



remove(name:string){

if(typeof document==="undefined")
return;


document.cookie =
`${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;

}

};