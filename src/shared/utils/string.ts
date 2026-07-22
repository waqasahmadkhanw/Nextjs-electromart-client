export function capitalize(
  value:string
):string {

 return value.charAt(0).toUpperCase() 
 + value.slice(1);

}


export function truncate(
 value:string,
 length:number
):string {

 if(value.length <= length)
   return value;

 return `${value.slice(0,length)}...`;

}


export function slugify(
 value:string
):string {

 return value
 .toLowerCase()
 .trim()
 .replace(/\s+/g,"-")
 .replace(/[^\w-]+/g,"");

}