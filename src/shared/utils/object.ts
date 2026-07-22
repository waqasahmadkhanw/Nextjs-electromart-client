export function removeEmptyValues<
T extends Record<string,unknown>
>(
object:T
){

return Object.fromEntries(

 Object.entries(object)
 .filter(
 ([,value]) =>
 value !== undefined &&
 value !== null &&
 value !== ""
 )

);

}



export function deepClone<T>(
value:T
):T {

return JSON.parse(
 JSON.stringify(value)
);

}