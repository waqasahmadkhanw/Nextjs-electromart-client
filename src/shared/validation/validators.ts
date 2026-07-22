export function isValidEmail(
email:string
){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(email);

}



export function isStrongPassword(
password:string
){

return (
password.length >= 8 &&
/[A-Z]/.test(password) &&
/[0-9]/.test(password)
);

}



export function isRequired(
value:unknown
){

return (
value !== undefined &&
value !== null &&
value !== ""
);

}