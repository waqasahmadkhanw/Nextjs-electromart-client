export const maskEmail = (
email:string
):string=>{

const [name,domain]=email.split("@");

if(!name || !domain)
return email;


return `${name.slice(0,2)}***@${domain}`;

};



export const formatPhone = (
phone:string
):string=>{

return phone.replace(
/(\d{3})(\d{3})(\d+)/,
"$1-$2-$3"
);

};