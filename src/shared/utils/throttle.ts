export function throttle<
T extends (...args:any[])=>void
>(
func:T,
limit:number
){

let waiting=false;


return (...args:Parameters<T>)=>{


if(!waiting){

 func(...args);

 waiting=true;


 setTimeout(
 ()=>{
 waiting=false;
 },
 limit
 );


}


};

}