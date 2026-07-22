export function clamp(
value:number,
min:number,
max:number
){

return Math.min(
 Math.max(value,min),
 max
);

}



export function randomNumber(
min:number,
max:number
){

return Math.floor(
 Math.random()*(max-min+1)+min
);

}