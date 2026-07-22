export function isEmail(
email:string
){

return /^[^\s@]+@[^\s@]+\.[^\s@]+$/
.test(email);

}



export function isEmpty(
value:unknown
){

return (
value === null ||
value === undefined ||
value === ""
);

}